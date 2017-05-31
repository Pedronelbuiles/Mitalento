<?php
	$nombre = $_POST["nombre"];
	$email = $_POST["email"];
	$hablemos = $_POST["hablemos"];
	$contenido = " Nombre: ".$nombre."\n Correo: ".$email."\n Hablemos: ".$hablemos;
	mail("pedronel.builes@gmail.com", "Mensaje de contacto Mi talento", $contenido);
	header("Location:../index.html");
?>