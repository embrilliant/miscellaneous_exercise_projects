<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 17:15
 */

    require_once("Class/Machine/Printer.php");

    class BrowserPrinter extends Printer {

        public function __construct(Bookshelf $somethingToPrint) {

            echo '<html style="background-color: #FF0055; font-family: Arial; color: white; text-shadow: #313131 1px 1px 5px"></html>';
            foreach ($somethingToPrint as $eachThing) {
                $id = $eachThing->getId();
                $title = $eachThing->getTitle();
                $author = $eachThing->getAuthor()->getFirstname()." ".$eachThing->getAuthor()->getLastname();
                $publisher = $eachThing->getPublisher()->getPublisherName();
                $borrowed = $eachThing->getBorrowed()->getFirstname()." ".$eachThing->getBorrowed()->getLastname();

                echo "$id | $title | $author | $publisher | $borrowed </br><hr>";

            }

        }
    }

?>