<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure PHPMailer is installed via Composer
$config = require 'config.php'; // Load configuration

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Gmail SMTP server
        $mail->SMTPAuth = true;ariable
        $mail->Username = $config['smtp_email']; // Retrieve email from config variable
        $mail->Password = $config['smtp_password']; // Retrieve password from config
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email settings
        $mail->setFrom($config['smtp_email'], 'Brew Beans'); // Use the same email for "From"
        $mail->addAddress('unionamis@gmail.com'); // Recipient's email
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo "Message sent successfully.";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Failed to send message. Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo "Method not allowed.";
}
?>
