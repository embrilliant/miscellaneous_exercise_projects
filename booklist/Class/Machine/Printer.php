<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:57
 */
    require_once("Class/Machine.php");

    class Printer extends Machine {

        public function action() {
            echo "I can print";
        }

    }

?>