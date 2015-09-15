<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:57
 */
    require_once("Class/Creature.php");

    class Human extends Creature {

        private $numberOfEyes;
        private $hasClothes;

        public function canProgram() {
            echo true;
        }

        public function setNumberOfEyes($number) {
            $this->numberOfEyes = $number;
        }

        public function hasClothes($boolean) {
            $this->hasClothes = $boolean;
        }

    }

?>