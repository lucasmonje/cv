function recaptchaLoad(n, t, i) {
    if (DetectarNavegadorIE()) i(t);
    else {
        $("#CaptchaInvisible").html("");
        $("#CaptchaInvisible").append('<div class="captcha"><div class="g-recaptcha" data-sitekey="' + n + '" data-callback="validarReCaptchaInvisible" data-size="invisible" data-badge="inline"><\/div><\/div>');
        var r = document.getElementById("btn-submit");
        r.onclick = t
    }
}

function validarCaptcha(n) {
    var t = $("#CaptchaInputText").val(),
        i = $("#CaptchaDeText").val();
    n(t);
}

function validarReCaptchaInvisible() {
    var n = $("#g-recaptcha-response").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: "/IngresoDatos/ValidarReCaptcha",
        data: {
            captcha: n
        },
        success: function(n) {
            IsAjaxError(n) ? (grecaptcha.reset(), showErrorModal("Error", "Ocurrio un error en la validacion del ReCaptcha")) : n ? validarPorSmsToken() : (grecaptcha.reset(), showErrorModal("Error", "ReCaptcha incorrecto"))
        },
        error: function(n) {
            grecaptcha.reset();
            showErrorModal("Error", "Ocurrio un error en la validacion del Captcha");
            OnJsError(n, !1, "Error al validar con recaptcha.")
        }
    })
}

function getEstadoCaptcha() {
    habilitarBoton();
}
