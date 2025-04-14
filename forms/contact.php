<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "gitesh15796@gmail.com";

  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $subject = trim($_POST["subject"]);
  $message = trim($_POST["message"]);

  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo "All fields are required.";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Invalid email address.";
    exit;
  }

  $email_subject = "[Contact] $subject";
  $email_body = "You received a new message:\n\n"
              . "Name: $name\n"
              . "Email: $email\n\n"
              . "Message:\n$message";

  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $email_subject, $email_body, $headers)) {
    echo "OK";
  } else {
    http_response_code(500);
    echo "Failed to send the message.";
  }
} else {
  http_response_code(403);
  echo "Invalid request.";
}
?>
