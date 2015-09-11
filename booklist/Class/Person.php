<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:39
 */

    class Person {
        private $firstname;
        private $lastname;
        private $age;

        public function __construct($firstname = "-", $lastname = "") {
            $this->firstname = $firstname;
            $this->lastname = $lastname;
        }

        public function setFirstname($firstname) {
            $this->firstname = $firstname;
        }

        public function getFirstname() {
            return $this->firstname;
        }

        public function setLastname($lastname) {
            $this->lastname = $lastname;
        }

        public function getLastname() {
            return $this->lastname;
        }

        public function setAge($age) {
            $this->age = $age;
        }

        public function getAge() {
            return $this->age;
        }
    }

?>