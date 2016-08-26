<?php

	require_once 'dbconfig.php';
	
	if(isset($_GET['delete_id']))
	{
	//echo 'del-id';
		// select image from db to delete
		$stmt_select = $DB_con->prepare('SELECT image_path FROM advisories_items WHERE userID =:uid');
		$stmt_select->execute(array(':uid'=>$_GET['delete_id']));
		$imgRow=$stmt_select->fetch(PDO::FETCH_ASSOC);
		unlink("user_images/".$imgRow['image_path']);
		//echo $imgRow['image_path'];
		
		// it will delete an actual record from db
		$stmt_delete = $DB_con->prepare('DELETE FROM advisories_items WHERE userID =:uid');
		$stmt_delete->bindParam(':uid',$_GET['delete_id']);
		$stmt_delete->execute();
		//echo $_GET['delete_id'];
		header("Location: advisory_index.php");
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
	<link href="styleitemlist.css" rel="stylesheet" type="text/css"/>
	
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
                                    <a href="a.html">Home</a>
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
                        <li class="active"><h1><span class="highlight">EDIT / DELETE ADVISORIES DETAILS</span></h1></li>
                    </ol>
                </div>
                
            </div>
        </div>
	</section>
	<section id="content" class="grey_section">
    
    <div class="container">
       <div class="wrapper">
		
		<div class="content" style="width: 1000px !important;">
			<table class="menutable">
                <thead>
                    <tr>
                       
                        
						<th>
                            NAME
                        </th>
                        <th>
                            IMAGE
                        </th>						 
                        <th>
                            DESIGNATION
                        </th>
                        <th>
                            DESCRIPTION
                        </th>
						
                        <th>
							EDIT 
						</th>
						<th>
							DELETE 
						</th>
						
                    </tr>
                </thead>
<?php
	
	$stmt = $DB_con->prepare('SELECT userID, advisory_header, name, image_path, designation, description FROM advisories_items ORDER BY userID DESC');
	$stmt->execute();
	
	if($stmt->rowCount() > 0)
	{
		while($row=$stmt->fetch(PDO::FETCH_ASSOC))
		{
			extract($row);
			?>
			
			
                
				<?php
				//if ($item_list[$i] !='')				
				//{				
				//foreach($item_list[$i] as $key => $value):
				//$data[$key] = $value;
		
				?>
				
						<tbody>
                        <tr>
                            
							
							<td>
								<img src="<?php echo $name;?>" alt="" />
                            </td>
                            <td>
                                <?php echo $row['image_path']; ?>
                            </td>							
                            <td>
                                <?php echo $designation; ?>
                            </td>
                            <td>
                                <?php echo $description; ?>
                            </td>
							<td>
							<span>
							<a class="btn btn-info" href="advisory_editform.php?edit_id=<?php echo $row['userID']; ?>" title="click for edit" onclick="return confirm('Are you sure to edit ?')"><span class="glyphicon glyphicon-edit"></span> Edit</a>                       
						   
						   
                            </td>
                            <td>                                
							<a class="btn btn-danger" href="?delete_id=<?php echo $row['userID']; ?>" title="click for delete" onclick="return confirm('Are you sure to delete ?')"><span class="glyphicon glyphicon-remove-circle"></span> Delete</a>				
                            </td>
                        </tr>
						
                    <?php //endforeach; 	
					//}?>
<h1 style="text-align:center"><?php //echo $category_list[$i]['category'];?></h1>					
					<?php// }?>
					
                </tbody>
            </table><br/>
						
				
       
			</div>
				
				
			</div>     
			<?php
		}
	}
	else
	{
		?>
        <div class="col-xs-12">
        	<div class="alert alert-warning">
            	<span class="glyphicon glyphicon-info-sign"></span> &nbsp; No Data Found ...
            </div>
        </div>
        <?php
	}
	
?>      



           				
			     


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
	

        <!-- Map Scripts -->

      

    </body>
</html>

