<?php

	error_reporting( ~E_NOTICE ); // avoid notice
	
	require_once 'dbconfig.php';
	
	//if(isset($_POST['btnsave']))
	//{
		//$username = $_POST['user_name'];// user name
		//$userjob = $_POST['user_job'];// user email
	if(is_array($_FILES)){	
		$nheader = $_POST['n_header'];// user name
		$nsubheading = $_POST['n_subheading'];// user email
		
		$ndescription = $_POST['n_description'];// user email
		//echo 'nheader: '.$nheader;
		//echo 'nsubheading: '.$nsubheading;
		//echo 'ndescription: '.$ndescription;
		
		$imgFile = $_FILES['user_image']['name'];
		$tmp_dir = $_FILES['user_image']['tmp_name'];
		$imgSize = $_FILES['user_image']['size'];
		
		
		//if(empty($aheader)){
			//$errMSG = "Please Enter Advisory Header.";
		//}
		//else if(empty($aname)){
			//$errMSG = "Please Enter Your Name.";
		//}
		//else if(empty($imgFile)){
			//$errMSG = "Please Select Image File.";
		//}
		//else
		//{
			$upload_dir = 'user_images/'; // upload directory
	
			$imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // get image extension
		
			// valid image extensions
			$valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
		
			// rename uploading image
			$userpic = rand(1000,1000000).".".$imgExt;
				
			// allow valid image file formats
			if(in_array($imgExt, $valid_extensions)){			
				// Check file size '5MB'
				if($imgSize < 5000000)				{
					move_uploaded_file($tmp_dir,$upload_dir.$userpic);
				}
				else{
					echo 'Sorry, your file is too large.';
				}
			}
			else{
				echo 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';		
			}
		//}
		
		
		// if no error occured, continue ....
		//if(!isset($errMSG))
		//{
			$stmt = $DB_con->prepare('INSERT INTO news_items(news_header, subheading, image_path, description) VALUES(:nh, :ns, :upic, :ndesc)');
			$stmt->bindParam(':nh',$nheader);
			$stmt->bindParam(':ns',$nsubheading);
			$stmt->bindParam(':upic',$userpic);
		
			$stmt->bindParam(':ndesc',$ndescription);
			
			if($stmt->execute())
			{
				echo 'New record succesfully added ...';
				//header("refresh:5;news_events_index.php"); // redirects image view page after 5 seconds.
			}
			else
			{
				echo 'Error while inserting....';
			}
		//}
	//}
	
	}
?>