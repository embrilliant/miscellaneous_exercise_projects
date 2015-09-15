<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 14.09.2015
 * Time: 14:07
 */

    abstract class Substance {

        private $material;
        private $shape;
        private $color;
        private $name;

        public function __construct($material, $shape, $color, $name) {
            $this->material = $material;
            $this->shape = $shape;
            $this->color = $color;
            $this->name = $name;
        }

        public function name() {
            return $this->name;
        }

        abstract public function getFormOfSubstance();

    }

?>