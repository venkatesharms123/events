<?php

	$DB_HOST = 'localhost:3307';
	$DB_USER = 'chanth';
	$DB_PASS = 'password';
	$DB_NAME = 'registration';

	
	
	try{
		$DB_con = new PDO("mysql:host={$DB_HOST};dbname={$DB_NAME}",$DB_USER,$DB_PASS);
		$DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e){
		echo $e->getMessage();
	}
	
?>