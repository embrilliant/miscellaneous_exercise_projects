<?php
    session_start();

    session_destroy();

    echo "Logging out..";

    print "<meta http-equiv=\"refresh\" content=\"0;URL=../login/dropTest.html\">";
?>