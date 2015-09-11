<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:47
 */

    class Borrower extends Person {

        private $roleOfPerson = "borrower";

        public function getRoleOfPerson() {
            return $this->roleOfPerson;
        }

    }

?>