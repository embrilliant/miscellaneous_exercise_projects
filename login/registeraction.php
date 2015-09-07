<?php

    include "functions.php";

    $username = check_input(is_valid_username($_POST["username"]));
    $password = $_POST["password"];

    $register_timestamp = date("Y-m-d H:i");

    $xmlData = simplexml_load_file("data.xml");

    foreach( $xmlData->user as $user ) { // for every user node
        if ( $user->username == $username ) {
            echo "Username already exists.";
            $userexist = true;
            break;
        } else {
            $userexist = false;
        }
    }

    if (!$userexist) {
        $newuser = $xmlData->addChild("user");

        $newuser->addChild("username", $username);

        $newuser->addChild("password", $password);

        $newuser->addChild("lastlogin", $register_timestamp);

        $xmlData->asXML("data.xml");

        print "<meta http-equiv=\"refresh\" content=\"0;URL=../login/index.html\">";
    }
?>