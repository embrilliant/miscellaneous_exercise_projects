<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 11:26
 */

    require_once("Class/Creature/Animal.php");

    class Elephant extends Animal {

        private $characteristic;
        private $favFood;

        public function setCharacteristic($characteristic) {
            $this->characteristic = $characteristic;
        }

        public function getCharacteristic() {
            return $this->characteristic;
        }

        public function setFavFood($FavFood) {
            $this->favFood = $FavFood;
        }

        public function getFavFood() {
            return $this->favFood;
        }

    }

?>