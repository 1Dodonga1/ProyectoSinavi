<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['telefono'];

$header = 'From:' . $mail . " \r\n";
$header.= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header.= "Mime-Version: 1.0  \r\n";
$header.= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$mensaje.= "Su e-mail es: " . $mail . " \r\n";
$mensaje.= "Su telefono es:" . $telefono . " \r\n";
$mensaje.= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje.= "Enviado el " . date('d/m/Y', time());

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //SMTP::DEBUG_SERVER;// Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'sinavisite@gmail.com';                     // SMTP username
    $mail->Password   = 'Hol@ComoEst@s123.';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('sinavisite@gmail.com', 'Sinav');
    $mail->addAddress('sinavisite@gmail.com', $nombre);     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'queja/sujerencia/comentario';
    $mail->Body    = $mensaje;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'El mensaje se envio correctamente';
} catch (Exception $e) {
    echo "Hubo un error al mandar el correo: {$mail->ErrorInfo}";
}




?>