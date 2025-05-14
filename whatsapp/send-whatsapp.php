<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    // Format the WhatsApp message
    $whatsappMessage = "Hello, my name is $name. My phone number is $phone. Here is my message: $message";

    // WhatsApp API URL
    $whatsappURL = "https://wa.me/9492246177?text=" . urlencode($whatsappMessage);

    // Redirect to WhatsApp
    header("Location: $whatsappURL");
    exit;
}
?>
