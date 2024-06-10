<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$formcontent="
    Nombre: $name \n
    E-mail: $email \n
    Mensaje: $message
";

$recipient = "nicomattos2014@gmail.com";

$subject = "Nuevo e-mail desde Mi Portfolio!";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>