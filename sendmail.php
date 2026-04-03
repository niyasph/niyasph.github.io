<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $mobile = htmlspecialchars($_POST['mobile']);

    // Your email
    $to = "support@ampselectricalengineers.com";

    // Subject
    $subject = "Contact Form Message from $name";

    // Email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Contact No: $mobile\n\n";
    $body .= "Message:\n$message";

    // Headers
    $headers = "From: $email";

    // Send mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>    