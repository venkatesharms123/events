<?php

/*

EDIT.PHP

Allows user to edit specific entry in database

*/



// creates the edit record form

// since this form is used multiple times in this file, I have made it a function that is easily reusable

function renderForm($id, $firstname, $error)

{

?>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <title>Welcome to GITS !!!.</title>
    <meta charset="utf-8">
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]-->
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->


<link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css" id="color-switcher-link">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/fonts.css">
	<link href="css/advisories_newsandevents.css"   rel="stylesheet" type="text/css" />
    <script src="js/modernizr-2.6.2.min.js"></script>

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
  
<html>

<head>

<title>Edit News & Events Header</title>

</head>

<body>
<title>Edit Record</title>

</head>

<body>

<?php

// if there are any errors, display them

if ($error != '')

{

echo '<div style="padding:4px; border:1px solid red; color:red;">'.$error.'</div>';

}

?>



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
                        
                        <li class="active"><h1><span class="highlight">UPDATE NEWS & EVENTS HEADER DETAILS</span></h1></li>
                    </ol>
                </div>
                
            </div>
        </div>
	</section>
    
<section id="info" class="grey_section">
    <div class="container">
       
        <div class="row">           
            
           
			
			<div class="col-sm-4 to_animate" data-animation="fadeInLeft">

                <form action="" method="post">

				<div>

				<strong>News & Events header: </strong> <input type="text" id="firstname"name="firstname" size="30" value="<?php echo $firstname;  ?>"  maxlength="30" /><br/>
				</div>
				<input type="submit" id="news-edit-header" name="submit" value="Update" class="theme_button">
			
			
			</div>	
	
					
			<div class="col-sm-4 to_animate" data-animation="fadeInLeft">
				
				<p class="news-edit-header-message">                        
				<input type="hidden" >
				</p>	

			</div>
			
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
        


        <!-- sliders, filters, carousels -->
        <script src="js/jquery.isotope.min.js"></script>
        <script src='js/owl.carousel.min.js'></script>
        <script src='js/jquery.fractionslider.min.js'></script>
        <script src='js/jquery.flexslider-min.js'></script>
        <script src='js/jquery.bxslider.min.js'></script>

        <!-- custom scripts -->
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
		<script src="js/news_header_add_edit_validator.js"></script>

    </body>
 

</body>

</html>

<?php

}







// connect to the database

include('connect-db.php');



// check if the form has been submitted. If it has, process the form and save it to the database

if (isset($_POST['submit']))

{

// confirm that the 'id' value is a valid integer before getting the form data

if (is_numeric($_POST['id']))

{

// get form data, making sure it is valid

$id = $_POST['id'];

$firstname = mysql_real_escape_string(htmlspecialchars($_POST['firstname']));





// check that firstname/lastname fields are both filled in

if ($firstname == '' )

{

// generate error message

$error = 'ERROR: Please fill in all required fields!';



//error, display form

renderForm($id, $firstname, $error);

}

else

{

// save the data to the database

mysql_query("UPDATE newsandeventsitemsheaders SET headers='$firstname' WHERE id='$id'")

or die(mysql_error());



// once saved, redirect back to the view page

header("Location: news_edit_delete_header.php");

}

}

else

{

// if the 'id' isn't valid, display an error

echo 'Error!';

}

}

else

// if the form hasn't been submitted, get the data from the db and display the form

{



// get the 'id' value from the URL (if it exists), making sure that it is valid (checing that it is numeric/larger than 0)

if (isset($_GET['id']) && is_numeric($_GET['id']) && $_GET['id'] > 0)

{

// query db

$id = $_GET['id'];

$result = mysql_query("SELECT * FROM newsandeventsitemsheaders WHERE id=$id")

or die(mysql_error());

$row = mysql_fetch_array($result);



// check that the 'id' matches up with a row in the databse

if($row)

{



// get data from db

$firstname = $row['headers'];



// show form

renderForm($id, $firstname,'');

}

else

// if no match, display result

{

echo "No results!";

}

}

else

// if the 'id' in the URL isn't valid, or if there is no 'id' value, display an error

{

echo 'Error!';

}

}

?>