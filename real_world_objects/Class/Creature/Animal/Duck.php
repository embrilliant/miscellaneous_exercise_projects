<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 11:54
 */
    require_once("Class/Creature/Animal.php");

    class Duck extends Animal {

        private $movement = "drift";
        private $food = "fish";

        public function getMovement() {
            return $this->movement;
        }

        public function getFood() {
            return $this->food;
        }

    }

?>