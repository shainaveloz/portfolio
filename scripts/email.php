<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

function sendEmail(){
    if(isset($_POST['submit'])) {
        $email_to = "veloz.test@gmail.com";
        $email_subject = "Test";         
        $fname = $_POST['fname']; // required
        $lname = $_POST['lname']; // required
        $message = $_POST['message']; // required
        $email_from = $_POST['email']; // required
        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $email_to;
        $mail->Password = '';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setFrom($email_from, $email_subject);
        $mail->addAddress($email_to); 
        $mail->send();
    }
};

try {
    sendEmail()
    echo('message has been sent!')
}catch(Exception $e){
    echo('message was not sent. Error:', $mail->ErrorInfo)
}

?>