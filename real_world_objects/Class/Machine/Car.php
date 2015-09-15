<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 13:56
 */
    require_once("Class/Machine.php");

    class Car extends Machine {

        private $numberOfWheels;
        private $numberOfDoors;
        private $color;
        private $name;

        public function __construct($color, $name, $numberOfWheels = 0, $numberOfDoors = 0) {
            $this->color = $color;
            $this->name = $name;
            $this->numberOfWheels = $numberOfWheels;
            $this->numberOfDoors = $numberOfDoors;
        }

        public function getColor() {
            return $this->color;
        }

        public function getNumberOfWheels() {
            return $this->numberOfWheels;
        }

        public function getNumberOfDoors() {
            return $this->numberOfDoors;
        }

        public function functionality() {
            return "transporting";
        }

        public function name() {
            return $this->name;
        }
    }

?>