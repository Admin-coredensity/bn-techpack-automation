<?php
echo "try sending email";
phpversion();
$to = "gitesh15796@gmail.com";

$subject = 'Test Email from Localhost';
$message = 'This is a sample email sent from a PHP script on localhost!';
$headers = 'From: support@bntecpackautomation.com' . "\r\n" . // Replace with your sender email
           'Reply-To: support@bntecpackautomation.com' . "\r\n" .
           'Cc: nidhiengineer0611@gmail.com' . "\r\n" .
           'X-Mailer: PHP/8.2';

// Send email
if (mail($to, $subject, $message, $headers)) {
    echo 'Email has been sent successfully!';
} else {
    echo 'Email could not be sent. Please check your SMTP configuration.';
}
?>
