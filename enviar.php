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

$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";

?>
