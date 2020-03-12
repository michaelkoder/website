<?php
/*
echo 'recup ? <br>';
print_r($_POST);
echo '<br>';
https://www.truecodex.com/course/angular-project-training/create-contact-form-and-send-data-on-email-angular
*/

header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

$formdata = json_decode($_POST[json], true);

if( ! empty($formdata)) {

    $name = $formdata['name'];
    $firstName = $formdata['firstName'];
    $email = $formdata['email'];
    $phone = $formdata['phone'];
    $title = $formdata['titreMessage'];
    $messageMail = $formdata['contactMessage'];

    $message = '
    <html>
    <head>
    <title>Nouveau message recu depuis MichaelKoder.com </title>
    </head>
    <body><p>Contenu du message : .</p>';
    $message .= '<p><strong>Name: </strong>'.$name.'</p>';
    $message .= '<p><strong>firstName: </strong>'.$firstName.'</p>';
    $message .= '<p><strong>Email: </strong>'.$email.'</p>';
    $message .= '<p><strong>Phone: </strong>'.$phone.'</p>';
    $message .= '<p><strong>Titre: </strong>'.$title.'</p>';
    $message .= '<p><strong>Name: </strong>'.$messageMail.'</p>';
    $message .= '<br />Merci
    </body>
    </html>';


    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <contact@digikoder.com>' . "\r\n";
    $subject="Mail Contact MichaelKoder.com : ".$title;

   if( mail($email,$subject,$message,$headers)){
       echo json_encode("success");
   }
   else{echo 'error';}
}


?>