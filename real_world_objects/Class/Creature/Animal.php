<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:57
 */
    require_once("Class/Creature.php");

    class Animal extends Creature {

        private $color;
        private $type;

        public function canProgram() {
            echo false;
        }

        public function setColor($color) {
            $this->color = $color;
        }

        public function getColor() {
            return $this->color;
        }

        public function setType($type) {
            $this->type = $type;
        }

        public function getType() {
            return $this->type;
        }

    }

?>