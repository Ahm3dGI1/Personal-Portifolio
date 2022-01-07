<?php

if (isset($_POST['submit'])) {

    if (isset($_POST['e-mail']) && filter_var($_POST['e-mail'], FILTER_VALIDATE_EMAIL)) {
        $name = $_POST['name'];
        $mailFrom = $_POST['e-mail'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];


        $mailTo = 'ahmedgouda797@gmail.com';
        $header = 'From' . $mailFrom . 'via website.';
        $txt = 'You have recieved and e-mail from' . $name . ".\n\n" . $message;

        mail($mailTo, $subject, $txt, $header);
        header("Location: index.php?mailsend");
    } else {
        echo '<style type="text/css">
        #e-mail-lable {
            color: red;
        }
        </style>
        <script>
        document.getElementById("e-mail-label").innerHTML = "Invalid E-mail";
        </script>';
    }
}
