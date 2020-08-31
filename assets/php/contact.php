<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "tingcl2@uci.edu";
    $headers = "From: ".$mailFrom;
    $body = "Portfolio inquiry from".$name.".\n\n".$message

    mail($mailTo, $subject, $body, $headers);
    header("Location: index.html?mailsend");
}
