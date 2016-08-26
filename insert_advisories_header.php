<?PHP
// PHP variable to store the host address
	$db_host  = "localhost";
// PHP variable to store the username
	$db_uid  = "root";
// PHP variable to store the password
	$db_pass = "";
// PHP variable to store the Database name  
	$db_name  = "registration"; 
$db_con = mysql_connect($db_host,$db_uid,$db_pass) or die('could not connect');
 mysql_select_db("registration",$db_con);
 //This code runs if the form has been submitted
 
session_start();
	$_SESSION['firstname'] = '';
	
	$header = $_POST['firstname'];
		
	$_SESSION['firstname'] = $header;
 		$result =  mysql_query("SELECT * FROM advisoriesheader WHERE headers = '$header' ",$db_con)					
					or die(mysql_error());
					$num_rows = mysql_num_rows($result);
					if($num_rows!=0){
					echo 'RECORDS EXIST';
					return false;
					}					
					
						
					else{
					
					echo 'ADDING...';
					$insert = "INSERT INTO advisoriesheader (headers)
								VALUES ('".$_POST['firstname']."')";
								$add_member = mysql_query($insert);							
								
								echo "<script>			
										window.location.href='advisory_view_headers.html';
									  </script>";
									return false;
					}
			
				


?>  