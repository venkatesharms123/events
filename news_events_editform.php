<?php

	error_reporting( ~E_NOTICE );
	
	require_once 'dbconfig.php';
	
	if(isset($_GET['edit_id']) && !empty($_GET['edit_id']))
	{
		$id = $_GET['edit_id'];
		//echo $id;
		$stmt_edit = $DB_con->prepare('SELECT news_header, subheading, image_path, description FROM news_items WHERE userID =:uid');
		$stmt_edit->execute(array(':uid'=>$id));
		$edit_row = $stmt_edit->fetch(PDO::FETCH_ASSOC);
		extract($edit_row);
	}
	else
	{
		header("Location: news_details_index.php");
	}
	
	
	
	if(isset($_POST['btn_save_updates']))
	{
		//$username = $_POST['user_name'];// user name
		//$userjob = $_POST['user_job'];// user email
		
		$nheader = $_POST['n_header'];// user name
		$nsubheading = $_POST['n_subheading'];// user email
		
		$ndescription = $_POST['n_description'];// user email
			
		$imgFile = $_FILES['user_image']['name'];
		$tmp_dir = $_FILES['user_image']['tmp_name'];
		$imgSize = $_FILES['user_image']['size'];
					
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
					$errMSG = "Sorry, your file is too large it should be less then 5MB";
				}
			}
			else
			{
				$errMSG = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";		
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
			$stmt = $DB_con->prepare('UPDATE news_items 
									     SET news_header=:nh, 
										     subheading=:ns, 
										     image_path=:upic,
											
										     description=:ndesc											 
								       WHERE userID=:uid');
			$stmt->bindParam(':nh',$nheader);
			$stmt->bindParam(':ns',$nsubheading);
			$stmt->bindParam(':upic',$userpic);
			
			$stmt->bindParam(':ndesc',$ndescription);
			$stmt->bindParam(':uid',$id);
				
			if($stmt->execute()){
				?>
                <script>
				alert('Successfully Updated ...');
				window.location.href='news_events_index.php';
				</script>
                <?php
			}
			else{
				$errMSG = "Sorry Data Could Not Updated !";
			}
		
		}
		
						
	}
	
?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
   <title>GITS :: Training</title>
    <meta charset="utf-8">
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]-->
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css" id="color-switcher-link">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/fonts.css">
	
	 <script src="js/jquery-1.11.1.min.js"></script>
	
    <script src="js/modernizr-2.6.2.min.js"></script>
	
	
	
	

<link rel="icon" href="favicon.ico" type="image/x-icon" />
    <!--[if lt IE 9]>
        <script src="js/html5shiv.min.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->

</head>
<body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->


<div id="box_wrapper">


    <section id="topline" class="light_section table_section">
         <div class="container">
            <div class="row">
                <div class="col-sm-3">
                   <a href="index.html" class="navbar-brand"><img src="images/logo.jpg" alt=""> </a>
                    
                </div>
                <div class="col-sm-9 text-right">
                  <span>
                        <i class="fa fa-envelope-o"></i> <a href="mailto:info@guruits.com">info@guruits.com</a>
                    </span>
                    <span>
                        <i class="fa fa-phone"></i> +91 (44) 226-80-627
                    </span>
                   
                </div>
                
            </div>
        </div>
    </section>


    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div>
                        <span id="toggle_mobile_menu"></span>
                        <span id="toggle_search"></span>
                        <div class="widget widget_search">
                            <form role="search" method="get" id="searchform" class="searchform form-inline" action="/">
                                <div class="form-group">
                                    <label class="screen-reader-text" for="search">Search for:</label>
                                    <input type="text" value="" name="search" id="search" class="form-control" placeholder="Search...">
                                </div>
                                <button type="submit" id="searchsubmit" class="theme_button">Search</button>
                            </form>
                        </div>
                        <nav id="mainmenu_wrapper">
                            <ul id="mainmenu" class="nav sf-menu">
                                <li class="active" >
                                    <a href="n.html">Home</a>
								</li>	
                            </ul>  
                        </nav>
                    </div>
                
                </div>
            </div>
        </div>
    </header>
    <section id="breadcrumbs" class="light_section with_bottom_border">
        <div class="container">
       
            <div class="row">
                <div class="col-sm-12">
                    <ol class="breadcrumb">
                        <li>
                            <a href="index.html"><i class="rt-icon-home2"></i></a>
                        </li>
                        <li class="active"><h1><span class="highlight">UPDATE NEWS & EVENTS DETAILS</span></h1></li>
                    </ol>
                </div>
                
            </div>
        </div>
	</section>
	<section id="content" class="grey_section">
    
    <div class="container">
        <div class="row">
           

            <div class="widget col-sm-6  to_animate animated fadeInLeftBig" data-animation="fadeInLeftBig" data-delay="250">
                <form class="news-events-edit-form" method="post" >
				
                    <p class="news-events-edit-form-header">
                        <label for="name">News & Events header <span class="required">*</span></label>
                        <input type="text" aria-required="true" size="30" value="<?php echo $news_header; ?>" name="n_header" id="n-header" maxlength="30" class="form-control" placeholder="Enter News & Events Header">
                    </p>
					<p class="news-events-edit-form-header-message">                        
                        <input type="hidden" >
                    </p>
									
					
										
					<p class="news-events-edit-form-subheading">
                        <label for="name">Sub heading <span class="required">*</span></label>
                        <input type="text" aria-required="true" size="30" value="<?php echo $subheading; ?>" name="n_subheading" id="n-subheading" maxlength="30" class="form-control" placeholder="Enter Sub heading">
                    </p>
					<p class="news-events-edit-form-subheading-message">                        
                        <input type="hidden" >
                    </p>
					
					
					
					<tr><td>Upload Image: <td>
					<p class="news-events-edit-form-image">                        
                        <input type="hidden" >
                    </p>
					<p><img src="user_images/<?php echo $image_path;  ?>" height="250" width="250" id="edit-image-p" /></p>
					<td><input class="input-group" type="file" name="user_image" id="n-edit-image" accept="image/*" /></td>
					<p class="news-events-edit-form-image-message">                        
                        <input type="hidden" >
                    </p>
					
					
					
					<p class="news-events-edit-form-description">
                        <label for="address">Description</label>
                        <textarea aria-required="true" rows="4" cols="45" value="" name="n_description" id="n-description"  class="form-control" placeholder="Enter Description"><?php echo htmlspecialchars($description); ?></textarea>
                    </p>
					<p class="news-events-edit-form-description-message">                        
                        <input type="hidden" >
                    </p>					
                    
					
                    <p class="contact-form-submit vertical-margin-40">
                        <!-- <input type="submit" value="Send" id="contact_form_submit" name="contact_submit" class="theme_button"> -->
                        <button type="submit" id="contact_form_submit" name="btn_save_updates" class="theme_button" ><i class="rt-icon-sent"></i> Update</button>
                    </p>
                </form>
            </div>
                    

            
        </div>
    </div>
</section>

 


    <section id="copyright" class="light_section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                   <p>&copy; Copyright 2015 - <strong> GURU Information Technology Services Pvt Ltd.</strong></p>
                </div>
                               
            </div>
        </div>
    </section>
 

</div><!-- eof #box_wrapper -->

<div class="preloader">
    <div class="preloader_image"></div>
</div>


        <!-- libraries -->
        <script src="js/jquery-1.11.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.appear.js"></script>

        <!-- superfish menu  -->
        <script src="js/jquery.hoverIntent.js"></script>
        <script src="js/superfish.js"></script>
        
        <!-- page scrolling -->
        <script src="js/jquery.easing.1.3.js"></script>
        <script src='js/jquery.nicescroll.min.js'></script>
        <script src="js/jquery.ui.totop.js"></script>
        <script src="js/jquery.localscroll-min.js"></script>
        <script src="js/jquery.scrollTo-min.js"></script>
        <script src='js/jquery.parallax-1.1.3.js'></script>



        <!-- custom scripts -->
        <script src="js/plugins.js"></script>
        <script  src="js/main.js"></script>
		<script  src="js/formpage_validator.js"></script>
		<script  src="js/news_edit_validator.js"></script>

	

        <!-- Map Scripts -->

      

    </body>
</html>

