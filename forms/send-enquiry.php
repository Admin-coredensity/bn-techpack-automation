<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../assets/vendor/phpmailer/src/Exception.php';
require '../assets/vendor/phpmailer/src/PHPMailer.php';
require '../assets/vendor/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $productName  = htmlspecialchars($_POST['product_name']);
    $modelNumber  = htmlspecialchars($_POST['model_number']);
    $firstName    = htmlspecialchars($_POST['first_name']);
    $lastName     = htmlspecialchars($_POST['last_name']);
    $email        = htmlspecialchars($_POST['email']);
    $mobile       = htmlspecialchars($_POST['mobile']);
    $state        = htmlspecialchars($_POST['state']);
    $city         = htmlspecialchars($_POST['city']);
    $comments     = htmlspecialchars($_POST['comments']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'gitesh15796@gmail.com';
        $mail->Password   = 'ixbm cplz rfle unvr';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('gitesh15796@gmail.com', 'Product Enquiry');
        $mail->addAddress('gitesh15796@gmail.com'); // Send to same address or another

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Product Enquiry - $productName ($modelNumber)";
        $mail->Body    = "
            <h3>Product Enquiry Details</h3>
            <p><strong>Product Name:</strong> $productName</p>
            <p><strong>Model Number:</strong> $modelNumber</p>
            <hr>
            <p><strong>First Name:</strong> $firstName</p>
            <p><strong>Last Name:</strong> $lastName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mobile:</strong> $mobile</p>
            <p><strong>State:</strong> $state</p>
            <p><strong>City:</strong> $city</p>
            <p><strong>Comments:</strong><br>$comments</p>
        ";

        if ($mail->send()) {
            echo "Message has been sent";
        } else {
            echo "Mail could not be sent.";
        }

    } catch (Exception $e) {
         echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
