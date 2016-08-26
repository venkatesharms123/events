<?php

	error_reporting( ~E_NOTICE );
	
	require_once 'dbconfig.php';
	
	//if(isset($_GET['edit_id']) && !empty($_GET['edit_id']))
	//{
	if(is_array($_FILES)){	
	$id = $_GET['edit_id'];
	//echo $id;
	//if(!empty($id)){
		
		//echo $id;
		$stmt_edit = $DB_con->prepare('SELECT advisory_header, name, image_path, designation, description FROM advisories_items WHERE userID =:uid');
		$stmt_edit->execute(array(':uid'=>$id));
		$edit_row = $stmt_edit->fetch(PDO::FETCH_ASSOC);
		extract($edit_row);
	//}
	//else
	//{
	//	header("Location: advisories_details_index.php");
	//}
	
	
	
	//if(isset($_POST['btn_save_updates']))
	//{
		//$username = $_POST['user_name'];// user name
		//$userjob = $_POST['user_job'];// user email
		
		$aheader = $_POST['a_header'];// user name
		$aname = $_POST['a_name'];// user email
		$adesignation = $_POST['a_designation'];// user name
		$adescription = htmlspecialchars($_POST['a_description']);// user email
			
		$imgFile = $_FILES['user_image']['name'];
		$tmp_dir = $_FILES['user_image']['tmp_name'];
		$imgSize = $_FILES['user_image']['size'];
		//echo $imgFile;
		//echo $tmp_dir;
		//echo $imgSize;
		
					
		if($imgFile)
		{
			$upload_dir = 'user_images/'; // upload directory	
			$imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // get image extension
			$valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
			$userpic = rand(1000,1000000).".".$imgExt;
			if(in_array($imgExt, $valid_extensions))
			{			
				if($imgSize < 5000000)
				{
				
					unlink($upload_dir.$edit_row['image_path']);
					
					move_uploaded_file($tmp_dir,$upload_dir.$userpic);
					
				}
				else
				{
					echo 'Sorry, your file is too large it should be less then 5MB';
				}
			}
			else
			{
				echo 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';		
			}	
		}
		else
		{
			// if no image selected the old image remain as it is.
			$userpic = $edit_row['image_path']; // old image from database
		}	
						
		
		// if no error occured, continue ....
		if(!isset($errMSG))
		{
			$stmt = $DB_con->prepare('UPDATE advisories_items 
									     SET advisory_header=:ah, 
										     name=:an, 
										     image_path=:upic,
											 designation=:ades, 
										     description=:adesc											 
								       WHERE userID=:uid');
			$stmt->bindParam(':ah',$aheader);
			$stmt->bindParam(':an',$aname);
			$stmt->bindParam(':upic',$userpic);
			$stmt->bindParam(':ades',$adesignation);
			$stmt->bindParam(':adesc',$adescription);
			$stmt->bindParam(':uid',$id);
				
			if($stmt->execute()){
			echo 'Successfully Updated ...';
				
			}
			else{
				echo 'Sorry Data Could Not Updated !';
			}
		
		}
		
						
	}
	//}
	
?>