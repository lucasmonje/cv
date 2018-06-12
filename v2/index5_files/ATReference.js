var map;
var marcadores = [];
var marcadorSeleccionado = false, mapaIniciado = false;
var marcadorElegido;
var paises = [], lipaises = "";
var provincias = [];
var provactual = "";

function appendearulPaises() {
    var id = ["PaisNacimientoTitular", "NacionalidadTitular", "PaisNacimientoAdicional", "NacionalidadAdicional", "ResidenciaTributaria"];
    $.each(paises, function () {
        $(".ListasEnComun").append("<li><a href='javascript:void(0)' data-value='" + this.Codigo + "'>" + this.Nombre + "</a></li>");
    });
    $("#ListaResidenciaTributariaFull").children().addClass("ResidenciaTributariaoption");
    $("#ListaPaisNacimientoTitularFull").children().addClass("PaisNacimientoTitularoption");
    $("#ListaNacionalidadTitularFull").children().addClass("NacionalidadTitularoption");
    $("#ListaPaisNacimientoAdicionalFull").children().addClass("PaisNacimientoAdicionaloption");
    $("#ListaNacionalidadAdicionalFull").children().addClass("NacionalidadAdicionaloption");
    $.each(id, function (i) {
        $("." + id[i] + "option").click(function () {
            $("#Lista" + id[i] + "Full").hide();
            $("#" + id[i]).val($(this).children().html());
            $("#cmb" + id[i]).val($(this).children().data("value"));
            $("#" + id[i]).focus();
            $("#" + id[i]).focusout();
            if ($("#" + id[i]).attr("validateWith"))
                window[$("#" + id[i]).attr("validateWith")]();
            if (id[i].includes("Adicional")) {
                agregarEventosSeleccionOpcionListaDesplegable($(this).children(), "", id[i] + "Sel");
            }
            else if (id[i].includes("ResidenciaTributaria")) {
                $("#divInputAreaResidenciaTributaria").find("label").hide();
            }
        });
    });
}


function actualizarSeccionSucursales(callback) {
    var cmbprovinciaTitular = $("#cmbProvinciaTitular");
    var cmbLocalidadTitular = $("#cmbLocalidadTitular");

    $('#cmbSucursalProvincia option[value=' + cmbprovinciaTitular.val() + ']').prop('selected', true);
    $("#SucursalProvincia").val($('#cmbSucursalProvincia option[value=' + cmbprovinciaTitular.val() + ']').text());
    $("#divInputAreaSucProvincia").addClass("typed");

    actualizarComboLocalidades("SucursalLocalidad", "cmbSucursalProvincia", "true");
    if (cmbprovinciaTitular.val() !== "01" && $("#ListaSucursalLocalidadFull [data-code='" + $("#cmbLocalidadTitular").val() + "']").length === 1) {
        $('#cmbSucursalLocalidad option[value=' + cmbLocalidadTitular.val() + ']').prop('selected', true);
        $("#SucursalLocalidad").val($('#cmbSucursalLocalidad option[value=' + cmbLocalidadTitular.val() + ']').text());
        $("#divInputAreaSucLocalidad").addClass("typed");
    }
    actualizarSucursales("SucursalProvincia", "SucursalLocalidad");
    $("#SucursalLocalidad").on("change", function () { actualizarSucursales("SucursalProvincia", "SucursalLocalidad") });
    if (callback !== undefined) {
        callback();
    }
}


function actualizarSucursales(idProvincia, idLocalidad, callback) {
    var cmbProvincia = $("#cmb" + idProvincia);
    var indiceProvincia = cmbProvincia.prop('selectedIndex');
    var indiceLocalidadBarrio = $("#Lista" + idLocalidad + "Full [data-value='" + $("#cmb" + idLocalidad).val() + "']").attr("data-index");
    var sucursales;
    $("#listaSucursales").children().remove();
    limpiarComboSucursal();
    var bEsCapital = cmbProvincia.val() === "01";
    if ($("#" + idLocalidad).val() && indiceLocalidadBarrio >= 0) {
        sucursales = bEsCapital ? provincias[indiceProvincia].Barrios[indiceLocalidadBarrio].Sucursales : provincias[indiceProvincia].Localidades[indiceLocalidadBarrio].Sucursales;
    } else {
        sucursales = provincias[indiceProvincia].SucursalesOrdenadasPorCalle;
    }

    for (j = 0; j < sucursales.length; j++) {
        var dataPadre = bEsCapital ? sucursales[j].Barrio : sucursales[j].CodigoLocalidad;
        $("#listaSucursales").append($("<li><a href='javascript:void(0)' data-padre='" + dataPadre + "' data-value='" + sucursales[j].Codigo + "'>" + sucursales[j].NombreCalle.replace("&#241;", "ñ") + " " + sucursales[j].Altura + "</a></li>"));
    }
    $('#listaSucursales').children().click(function () {
        activeFour();
        if (!$("#SucursalLocalidad").val()) {
            var idSucSeleccionada = $(this).children().data('value');
            $("#SucursalLocalidad").val($("#ListaSucursalLocalidadFull [data-csuc='" + $("#listaSucursales [data-value='" + $(this).children().data('value') + "'").attr("data-padre") + "']").html());
            $("#cmbSucursalLocalidad").val($("#ListaSucursalLocalidadFull [data-csuc='" + $("#listaSucursales [data-value='" + $(this).children().data('value') + "'").attr("data-padre") + "']").data("value"));
            $("#divInputAreaSucLocalidad").addClass("typed");
            actualizarSucursales("SucursalProvincia", "SucursalLocalidad");
            $("#listaSucursales [data-value='" + idSucSeleccionada + "']").click();
        }
        agregarEventosSeleccionOpcionListaDesplegable($(this).children(), 'cmbSucursalRadicacionProducto', 'SucursalRadicacionProducto');
        validarComboSucursal = true;
        guardarSucursal($("#SucursalRadicacionProducto").val());
    });

    if (callback !== undefined) {
        callback();
    }
}

function limpiarComboSucursal() {
    $("#cmbSucursalRadicacionProducto").text("Sucursal");
    $("#SucursalRadicacionProducto").val("").trigger("change");
    validarComboSucursal = false;
    validarSecciones();
}


function validarCPDomicilioEntrega(codP, codL, cp) {
    var that = $("#OtraDireccionCodigoPostal");
    if ($("#OtraDireccionprovincia").val() === "" || $("#OtraDireccionlocalidad").val() === "") {
        showErrorModal("Aclaracion", "Para saber si la localidad ingresada es correcta, deben estar completas la provincia y la localidad.")
        that.val("");
        that.parent().attr("class", "inputArea");
        return;
    }
    else {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: "/IngresoDatosAdicional/ValidarCpDomicilio",
            data: { codProv: codP, codLoc: codL, codPostal: cp },
            success: function (data) {
                if (data !== true) {
                    showErrorModal("Error", "El Código Postal que ha ingresado no coincide con tu Localidad.");
                    that.val("");
                    that.parent().attr("class", "inputArea");
                }
                else {
                    ValidarCodigoPostalOtroDomicilio = true;
                    validarCamposSegundaParte();
                }
            },
        });
    }
}


function iniciarMapa() {
    if (!mapaIniciado) {
        $("#textoMapa").css("display", "block");
        $("#map").css("display", "block");
        $("#number-four").addClass("etapa-dos");

        cargarMapaConSucursales();
        google.maps.event.trigger(map, 'resize');
        mapaIniciado = true;
    }

}


function cargarMapaConSucursales() {
    for (var i = 0; i < provincias.length; i++) {
        var localidadesBarriosProv = provincias[i].Codigo === "01" ? provincias[i].Barrios : provincias[i].Localidades;
        for (var j = 0; j < localidadesBarriosProv.length; j++) {
            for (var k = 0; k < localidadesBarriosProv[j].Sucursales.length; k++) {
                if (localidadesBarriosProv[j].Sucursales[k].Coordenadas != null) {
                    var sucurLatlng = new google.maps.LatLng(localidadesBarriosProv[j].Sucursales[k].Coordenadas.Latitud, localidadesBarriosProv[j].Sucursales[k].Coordenadas.Longitud);
                    var marcador = new google.maps.Marker({
                        position: sucurLatlng,
                        icon: '/images/marcador-gris.png',
                        map: map,
                        optimized: false,
                        zIndex: 5
                    })
                    if (provincias[i].Codigo === "01") {
                        marcador.set('barrio', localidadesBarriosProv[j].Nombre);
                    }
                    marcador.set('id', localidadesBarriosProv[j].Sucursales[k].Codigo);
                    marcador.set('title', localidadesBarriosProv[j].Sucursales[k].Nombre);
                    marcador.set('direccion', localidadesBarriosProv[j].Sucursales[k].NombreCalle + " " + localidadesBarriosProv[j].Sucursales[k].Altura)
                    marcador.set('provincia', provincias[i].Codigo);
                    marcador.set('localidad', localidadesBarriosProv[j].Sucursales[k].CodigoLocalidad);
                    marcador.set('coordinates', localidadesBarriosProv[j].Sucursales[k].Coordenadas.Latitud + ',' + localidadesBarriosProv[j].Sucursales[k].Coordenadas.Longitud);
                    marcadores.push(marcador);
                }
            }
        }
    }

    for (i = 0; i < marcadores.length; i++) {

        google.maps.event.addListener(marcadores[i], 'click', (function (marcador, i) {
            return function () {
                
                if (marcadorSeleccionado !== false && marcadorElegido !== i) {
                    marcadores[marcadorElegido].setIcon("/images/marcador-gris.png");
                    marcadorElegido = "";
                    marcadorSeleccionado = false;
                }

                marcadores[i].set('pointer', i);
                

                activeFour();
                $('#cmbProvinciaTitular option[value=' + marcadores[i].get("provincia") + ']').prop('selected', true);
                $("#cmbSucursalProvincia").val(marcadores[i].get("provincia"));

                $("#SucursalProvincia").val($('#cmbProvinciaTitular option[value=' + marcadores[i].get("provincia") + ']').text());
                if ($("#SucursalProvincia").val() !== "") {
                    $("#divInputAreaSucProvincia").addClass("typed");
                }
                else
                    $("#divInputAreaSucProvincia").removeClass("typed");

                actualizarComboLocalidades("SucursalLocalidad", "cmbSucursalProvincia", "true", function () {
                    if (marcadores[i].get("provincia") !== "01") {

                        $('#cmbSucursalLocalidad option[value=' + marcadores[i].get("localidad") + ']').prop('selected', true);

                        $("#SucursalLocalidad").val($('#cmbSucursalLocalidad option[value=' + marcadores[i].get("localidad") + ']').text()).trigger("change");
                    }
                    else {
                        $('#cmbSucursalLocalidad').val(marcadores[i].get("barrio"));
                        $("#SucursalLocalidad").val(marcadores[i].get("barrio")).trigger("change");
                    }

                    if ($("#SucursalLocalidad").val() !== "") {
                        $("#divInputAreaSucLocalidad").addClass("typed");
                    }
                    else
                        $("#divInputAreaSucLocalidad").removeClass("typed");

                    $("#SucursalLocalidad").blur();

                    actualizarSucursales("SucursalProvincia", "SucursalLocalidad", function () {
                        $("#cmbSucursalRadicacionProducto").text(marcadores[i].get("direccion"));
                        $("#SucursalRadicacionProducto").val(marcadores[i].get("id"));
                        marcadorSeleccionado = true;
                        marcadorElegido = i;
                        marcadores[i].setIcon("/images/marcador-naranja.png");
                        validarComboSucursal = true;
                        map.setCenter(marcadores[i].getPosition());
                        map.setZoom(16);
                        guardarSucursal($("#SucursalRadicacionProducto").val());
                        validarSecciones();
                    });

                });
            }
        })(marcadores[i], i));


        marcadores[i].setMap(map);

    }
}

function actualizarSucursalCombo(idSucur)
{   
    for (i = 0; i < marcadores.length; i++)
    {
        marcadores[i].setIcon('/images/marcador-gris.png');
        marcadorElegido = "";
        marcadorSeleccionado = false;
        if (parseInt(marcadores[i].get("id")) === parseInt(idSucur))
        {
            map.setCenter(marcadores[i].getPosition());
            marcadores[i].setIcon("/images/marcador-naranja.png");
            marcadorSeleccionado = true;
            marcadorElegido = i;
        }

    }
}


function actualizarZoomProvincias(prov) {
    for (i = 0; i < marcadores.length; i++) {
        if (marcadores[i].get("provincia") === prov) {

            var LatLng = marcadores[i].get('coordinates').split(",");
            var Lat = parseFloat(LatLng[0]);
            var Lng = parseFloat(LatLng[1]);
            map.setCenter({ lat: Lat, lng: Lng });
            map.setZoom(14);
            break;
        }
    }
}
function actualizarComboLocalidades(idlocalidades, idComboProvincia, bTieneComboSucursales, callback) {
    var cmbprovinciaTitular = $("#" + idComboProvincia).val();
    var indiceProvincia = $("#" + idComboProvincia).prop('selectedIndex');
   
    $("#cmb" + idlocalidades).empty();
    $("#Lista" + idlocalidades + "Full").children().remove();
    var localidadesOBarrios = (cmbprovinciaTitular === "01" && bTieneComboSucursales === "true") ? provincias[indiceProvincia].Barrios : provincias[indiceProvincia].Localidades;
    var bCargarLocalidad;
    var dataValue;
    var dataComboSucursal;//Este valor se va a utilizar cuando se elija la sucursal sin tener las localidades cargadas ya que la sucursal solo tiene el nombre del barrio o el id de la sucursal.
    for (j = 0; j < localidadesOBarrios.length; j++) {
        if ((bTieneComboSucursales === "true") && (localidadesOBarrios[j].Sucursales.length === 0)) {
            bCargarLocalidad = false;
        } else {
            bCargarLocalidad = true;
        }

        if (bCargarLocalidad) 
        {
            if (cmbprovinciaTitular === "01" && bTieneComboSucursales === "true") {
                dataValue = j;
                dataComboSucursal = localidadesOBarrios[j].Nombre;
            } else {
                dataValue = localidadesOBarrios[j].CodigoId;
                dataComboSucursal = localidadesOBarrios[j].CodigoId;
            }
            $("#cmb" + idlocalidades).append($("<option></option>").attr("value", dataValue).text(localidadesOBarrios[j].Nombre.replace("&#241;", "ñ")));
            $("#Lista" + idlocalidades + "Full").append($("<li><a href='javascript:void(0)' class='" + idlocalidades + "opcion'  data-csuc='" + dataComboSucursal + "' data-index = '" + j + "'data-value='" + dataValue + "'>" + localidadesOBarrios[j].Nombre.replace("&#241;", "ñ") + "</a></li>"));
        }
    }
    $("." + idlocalidades + "opcion").click(function () {
        $("#Lista" + idlocalidades + "Full").hide();
        $("#cmb" + idlocalidades).val($(this).data("value"));
        $("#" + idlocalidades).val($(this).html()).trigger("change");
        $("#" + idlocalidades).focus();
        $("#" + idlocalidades).focusout();
        if ($("#" + idlocalidades).attr("validateWith"))
            window[$("#" + idlocalidades).attr("validateWith")]();
    });
    if (localidadesOBarrios.length === 1) {
        $("#cmb" + idlocalidades).val($("#cmb" + idlocalidades).children()[0].value);
        $("#" + idlocalidades).val($("#cmb" + idlocalidades).children()[0].innerHTML).trigger("change");
        $("#" + idlocalidades).parent().removeClass().addClass("inputArea typed");
        $("#" + idlocalidades).removeClass("incompleto");
    }

    if (callback !== undefined) {
        callback(callback);
    }
}