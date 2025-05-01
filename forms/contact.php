<?php
echo "try sending email";
phpversion();
$to = "gitesh15796@gmail.com";
$cc = "cc@example.com";

$name = strip_tags(trim($_POST["name"]));
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

$subject = trim($_POST["subject"]);
$message = trim($_POST["message"]);
$headers = 'From: support@bntecpackautomation.com' . "\r\n" . // Replace with your sender email
           'Reply-To: support@bntecpackautomation.com' . "\r\n" .
           'Cc: ' . $cc . "\r\n" .
           'X-Mailer: PHP/8.2';

           $email_subject = "[Contact] $subject";
           $email_body = "You received a new Contact:\n\n"
                       . "Name: $name\n"
                       . "Email: $email\n\n"
                       . "Message:\n$message";

  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
      http_response_code(400);
      echo "All fields are required.";
      exit;
  }

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo 'Email has been sent successfully!';
} else {
    echo 'Email could not be sent.';
}
?>
