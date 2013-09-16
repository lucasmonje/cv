function runSWF(archivo, ancho, alto, version, bgcolor, id, FlashVars) // tutorial by IVI CONCEPT - www.ivi-concept.com
{
var quality="high"; // calidad de visualización de la peli
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+version+'" width='+ancho+' height='+alto+' id='+id+'>\n');
 document.write('<param name="movie" value='+archivo+'>\n');
 document.write('<param name="allowScriptAccess" value="always">\n');
 document.write('<param name="quality" value='+quality+'>\n');
 document.write('<param name="FlashVars" value='+FlashVars+'>\n');
 document.write('<param name="bgcolor" value='+bgcolor+'>\n');
 document.write('<param name="menu" value=false >\n');
 document.write('<embed src='+archivo+' bgcolor='+bgcolor+' FlashVars='+FlashVars+' menu=false allowScriptAccess=always quality='+quality+' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width='+ancho+' height='+alto+' swLiveConnect=true name='+id+'></embed>');
 document.write('</object>\n');
}
