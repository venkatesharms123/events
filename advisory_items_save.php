<?php

	error_reporting( ~E_NOTICE ); // avoid notice
	//echo 'page called';
	
	require_once 'dbconfig.php';
	//if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
	//if(isset($_POST['btnsave']))
	///{
		//$username = $_POST['user_name'];// user name
		//$userjob = $_POST['user_job'];// user email
	if(is_array($_FILES)){
		$aheader = $_POST['a_header'];// user name
		$aname = $_POST['a_name'];// user email
		$adesignation = $_POST['a_designation'];// user name
		$adescription = htmlspecialchars($_POST['a_description']);// user email
		
		//$imagetmp=(file_get_contents($_FILES['user_image']['tmp_name']));
		//echo $imagetmp;

		
	//if( $_SERVER['REQUEST_METHOD'] == "POST")
	//{	
	///if ($_POST['user_image']){
		$imgFile = $_FILES['user_image']['name'];
		$tmp_dir = $_FILES['user_image']['tmp_name'];
		$imgSize = $_FILES['user_image']['size'];
		//echo $imgFile;
	//	}
	//}
		
		
		
		
/*		if(empty($aheader)){
			$errMSG = "Please Enter Advisory Header.";
		}
		else if(empty($aname)){
			$errMSG = "Please Enter Your Name.";
		}
		else if(empty($imgFile)){
			$errMSG = "Please Select Image File.";
		}
		else
		{  */
			$upload_dir = 'user_images/'; // upload directory
	
			$imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // get image extension
		
			// valid image extensions
			$valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
		
			// rename uploading image
			$userpic = rand(1000,1000000).".".$imgExt;
				
			// allow valid image file formats
			if(in_array($imgExt, $valid_extensions)){			
				// Check file size '5MB'
				echo $imgSize;
				if($imgSize < 5000000)				{
					move_uploaded_file($tmp_dir,$upload_dir.$userpic);
				}
				else{
					//$errMSG = "Sorry, your file is too large.";
					//echo 'Sorry, your file is too large.';
				}
			}
			else{
			//echo 'else';
				//$errMSG = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
				//echo 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';
				
			}
		//}
		
		
		// if no error occured, continue ....
		//if(!isset($errMSG))
		//{
			$stmt = $DB_con->prepare('INSERT INTO advisories_items(advisory_header, name, image_path, designation, description) VALUES(:ah, :an, :upic,:ades, :adesc)');
			$stmt->bindParam(':ah',$aheader);
			$stmt->bindParam(':an',$aname);
			$stmt->bindParam(':upic',$userpic);
			$stmt->bindParam(':ades',$adesignation);
			$stmt->bindParam(':adesc',$adescription);
			
			if($stmt->execute())
			{
				echo 'New record succesfully added ...';
				//header("refresh:5;advisory_details_index.php"); // redirects image view page after 5 seconds.
			}
			else
			{
				//$errMSG = "error while inserting....";
				echo 'error while inserting....';
			}
		//}
	//}
	//}
	
	}
?>