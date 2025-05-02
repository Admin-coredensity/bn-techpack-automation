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
$subject = "New Enquiry for $product $model";

$body = "<html><body>";
$body .= "<h3>You received a new enquiry for $product $model:</h3>";
$body .= "<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse; font-family: Arial, sans-serif;'>";
$body .= "<tr><th align='left'>Field</th><th align='left'>Details</th></tr>";
$body .= "<tr><td><strong>Product</strong></td><td>$product</td></tr>";
$body .= "<tr><td><strong>Model</strong></td><td>$model</td></tr>";
$body .= "<tr><td><strong>Name</strong></td><td>$name</td></tr>";
$body .= "<tr><td><strong>Email</strong></td><td>$email</td></tr>";
$body .= "<tr><td><strong>Mobile</strong></td><td>$mobile</td></tr>";
$body .= "<tr><td><strong>City</strong></td><td>$city</td></tr>";
$body .= "<tr><td><strong>State</strong></td><td>$state</td></tr>";
$body .= "<tr><td><strong>Comments</strong></td><td>$comments</td></tr>";
$body .= "</table>";
$body .= "</body></html>";

// Headers
$headers = "From: BN TECPACK AUTOMATION <support@bntecpackautomation.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Cc: $cc\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "Your enquiry has been sent successfully!";
} else {
    http_response_code(500);
    echo "Failed to send enquiry. Please try again later.";
}
?>
