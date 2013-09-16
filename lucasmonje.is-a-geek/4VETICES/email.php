<?
if (isset($_POST['action'])) {
	//ACA PONES TU DIRECCION DE CORREO
	$dest = "info@lucasmonje.com";
	$head = "From: ".$_POST['email']."\r\n";
	
	//ACA PONES TU DIRECCION DE CORREO DE NUEVO
	$head.= "To: info@lucasmonje.com\r\n";
	
	//AHORA CREAMOS EL MENSAJE
	$msg = "NOMBRE:\n".$_POST['nombre']."\n\n";
	$msg.= "EMAIL:\n".$_POST['email']."\n\n";
	$msg.= "COMENTARIOS:\n";
	$msg.= $_POST['comentario']."\n\n";
	
	//ENVIAMOS EL MENSAJE
	if (mail($dest, $_POST['asunto'], $msg, $head)) {
		$error = "error=0";
	} else {
		$error = "error=1";
	}
	echo $error;
}
?>
