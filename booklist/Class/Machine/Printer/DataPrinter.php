<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 17:24
 */

    require_once("Class/Machine/Printer.php");

    class DataPrinter extends Printer {

        public function __construct($somethingToPrint) {

            $outputArray = array();
            header('Content-type: application/json');

            /** @var Book $eachThing */
            foreach($somethingToPrint as $eachThing) {
                $outputArray[] = $eachThing->convertToArray();
            }

            echo json_encode($outputArray);
        }
    }

?>