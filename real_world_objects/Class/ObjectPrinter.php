<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 15:23
 */

    class ObjectPrinter {

        public function __construct($ObjectToPrint) {

            $name = $ObjectToPrint->name();
            $color = $ObjectToPrint->getColor();

            echo '<div style="border: solid 3px white; box-shadow: 3px 3px 10px 0px rgba(80, 80, 80, 0.6), inset 3px 3px 10px 0px rgba(80, 80, 80, 0.6); border-radius: 50%; height: 100px; width: 150px; text-align: center; padding-top: 50px; background-color: '.$color.'"> '. $name . ' </div>';
        }
    }

?>