<?PHP
// PHP variable to store the host address
	//$db_host  = "localhost";
// PHP variable to store the username
	//$db_uid  = "root";
// PHP variable to store the password
	//$db_pass = "";
// PHP variable to store the Database name  
	//$db_name  = "registration"; 
	
	
// PHP variable to store the host address
	$db_host  = "localhost";
// PHP variable to store the username
	$db_uid  = "chanth";
// PHP variable to store the password
	$db_pass = "password";
// PHP variable to store the Database name  
	$db_name  = "registration"; 
$link = mysqli_connect($db_host,$db_uid,$db_pass) or die('could not connect');
 mysqli_select_db($link,"registration" );
 if (!$link)
{
  echo 'Unable to connect to the database server.';
  exit();
}

 if (!mysqli_set_charset($link, 'UTF8'))
{
  echo 'Unable to set database connection encoding.';
  exit();
}

if(!mysqli_select_db($link, 'registration'))
{
  echo 'Unable to locate registration database.';
  exit();  
}
?>