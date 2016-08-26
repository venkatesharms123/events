<?php
error_reporting( ~E_NOTICE);
include 'connection.php';
//header('Content-type: application/json',true);
header("Content-type: text/javascript",true);

$return_arr = array();	

$sql = "SELECT headers FROM advisoriesheader";
		
		$result = mysqli_query($link,$sql);
		if(!$result)
		{
			echo mysqli_error($link);
			exit();
		}

		while($rows = mysqli_fetch_array($result))
			{
			
			$row_array['advisories_header'] = $rows['headers'];			

			array_push($return_arr,$row_array);
			
			}
			
			
			echo json_encode($return_arr);
				
				
?>
