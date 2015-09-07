<?php

    function check_input($data, $error = 'Input not valid.') {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        if ($error && strlen($data) == 0)
        {
            echo ($error);
            die();
        }
        return $data;
    }

    function is_valid_username($username) {
        if (preg_match('/^\w{1,10}$/', $username))
            return $username;
        else
            return false;
    }

?>