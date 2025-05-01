<?php
$to = "gitesh15796@gmail.com"; // Main recipient
$cc = "nidhiengineer0611@gmail.com"; // CC recipient

// Get POST data safely
$name = trim($_POST["first_name"] ?? '') . ' ' . trim($_POST["last_name"] ?? '');
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$mobile = trim($_POST["mobile"] ?? '');
$city = trim($_POST["city"] ?? '');
$state = trim($_POST["state"] ?? '');
$comments = trim($_POST["comments"] ?? '');
$product = trim($_POST["product_name"] ?? '');
$model = trim($_POST["model_number"] ?? '');

// Basic validation
if (empty($name) || empty($email) || empty($mobile) || empty($city) || empty($state)) {
    http_response_code(400);
    echo "Error: All fields are required.";
    exit;
}

// Email subject and body
$subject = "New Enquiry for $product";
$body = "You received a new enquiry:\n\n"
      . "Product: $product\n"
      . "Model: $model\n"
      . "Name: $name\n"
      . "Email: $email\n"
      . "Mobile: $mobile\n"
      . "City: $city\n"
      . "State: $state\n\n"
      . "Comments:\n$comments";

// Headers
$headers = 'From: support@bntecpackautomation.com' . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'Cc: ' . $cc . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "Your enquiry has been sent successfully!";
} else {
    http_response_code(500);
    echo "Failed to send enquiry. Please try again later.";
}
?>