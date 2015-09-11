<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:45
 */

    class Author extends Person {

        private $roleOfPerson = "author";

        public function getRoleOfPerson() {
            return $this->roleOfPerson;
        }

    }

?>