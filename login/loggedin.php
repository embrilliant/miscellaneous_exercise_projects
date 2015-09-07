<?php
    session_start();

    if ( empty($_SESSION['xmlData']) ) {

        echo "You have logged out.";

    } else {

        $timestamp = date("Y-m-d H:i");

        $xmlData = new SimpleXMLElement($_SESSION['xmlData']);
        $user = new SimpleXMLElement($_SESSION['user']);

        $username = $user->username;
        $lastlogin = $user->lastlogin;

        echo "<p>Hello $username!</p>
        <p>Your last log in is $lastlogin.</p>
        <p>On this page there 's no other possibilities, except for this two links:</p>
        <p>- <a href=\"logout.php\">Log out</a></p>
        <p>- <a href=\"test.php\">Test</a></p>";

        $user->lastlogin = $timestamp;
        $xmlData->asXML("data.xml");

    }
?>