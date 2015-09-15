<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 13:52
 */

    abstract class Machine {

        private $operator; //obj
        private $fuel;
        private $name;

        public function setOperator($operator) {
            $this->operator = $operator;
        }

        public function setFuel($fuel) {
            $this->fuel = $fuel;
        }

        public function getFuel() {
            return $this->fuel;
        }

        public function getOperator() {
           return $this->operator;
        }

        public function name() {
            return $this->name;
        }

        abstract public function functionality();
    }

?>