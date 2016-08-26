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
<title>View Headers</title>

</head>

<body>




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
                        
                        
                       
                        <nav id="mainmenu_wrapper">
                            <ul id="mainmenu" class="nav sf-menu">
                                
                               						
								<li class="active" >
                                    <a href="advisories_add_header.html">Back</a>
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
                       
                        <li class="active"><h1><span class="highlight">EDIT / DELETE ADVISORIES HEADER DETAILS</span></h1></li>
                    </ol>
                </div>
                
            </div>
        </div>
	</section>
    
<section id="info" class="grey_section">
    <div class="container">
       
        <div class="row">           
            
           
			
			<div class="col-sm-4 to_animate" data-animation="fadeInLeft">

                
<?php

/*

VIEW.PHP

Displays all data from 'players' table

*/



// connect to the database

include('connect-db.php');



// get results from database

$result = mysql_query("SELECT * FROM advisoriesheader")

or die(mysql_error());



// display data in table




echo "<table border='3' cellpadding='1'>";

echo "<tr>  <th>ADVISORIES HEADER</th>  <th>EDIT </th> <th>DELETE </th></tr>";



// loop through results of database query, displaying them in the table

while($row = mysql_fetch_array( $result )) {



// echo out the contents of each row into a table

echo "<tr>";


echo '<td>' . $row['headers'] . '</td>';



echo '<td><a href="advisory_edit_header.php?id=' . $row['id'] . '">Edit</a></td>';

echo '<td><a href="advisory_delete_header.php?id=' . $row['id'] . '">Delete</a></td>';

echo "</tr>";

}



// close table>

echo "</table>";

?>

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

    </body>


</body>

</html>