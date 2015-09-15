<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 10:39
 */

    abstract class Creature {

        private $numberOfLegs;
        private $numberOfArms;
        private $name;

        public function __construct($name, $numberOfLegs = 0, $numberOfArms = 0) {
            $this->name = $name;
            $this->numberOfLegs = $numberOfLegs;
            $this->numberOfArms = $numberOfArms;
        }

        public function name() {
            return $this->name;
        }

        abstract public function canProgram();

    }

?>