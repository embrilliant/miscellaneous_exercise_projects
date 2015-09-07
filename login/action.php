<?php
    session_start();

    include "functions.php";

    $username = check_input(is_valid_username($_POST['username']));
    $password = $_POST['password'];

    $timestamp = date("Y-m-d H:i");

    $xmlData = simplexml_load_file("data.xml");

    foreach( $xmlData->user as $user ) { // for every user node
        if ($user->username == $username && $user->password == $password ) {

            $username = $user->username;

            $lastlogin = $user->lastlogin;

            // session
            $_SESSION['user'] = $user->asXML();
            $_SESSION['xmlData'] = $xmlData->asXML();

            echo "Logging in..";
            print "<meta http-equiv=\"refresh\" content=\"0;URL=../login/loggedin.php\">";
            break;
        } else {
            $result = "Invalid username or password.";
        }
    }

    echo $result;
?>