<?php

    require_once 'vendor/autoload.php';
    use GuzzleHttp\Client;

    $client = new Client();
    $response = $client->get("http://www.justraus.de/seo_js_test/seo_js_test/server.php");
    $data = $response->json();

    echo json_encode( $data );

?>