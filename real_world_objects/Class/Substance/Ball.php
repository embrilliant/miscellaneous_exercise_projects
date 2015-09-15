<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 14:33
 */

    require_once("Class/Substance.php");

    class Ball extends Substance {

        private $weight;
        private $levelOfHardness;





        public function setWeight($weight) {
            $this->weight = $weight;
        }

        public function getWeight() {
            return $this->weight;
        }

        public function setLevelOfHardness($level) {
            $this->levelOfHardness = $level;
        }

        public function getLevelOfHardness() {
            return $this->levelOfHardness;
        }

        public function getFormOfSubstance() {
            return "solid";
        }

    }

?>