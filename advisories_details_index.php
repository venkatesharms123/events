<?php


	require_once 'dbconfig.php';
	
	include'connection.php';
	
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
		header("Location: advisories_details_index.php");
	}
	
	
$sql = "SELECT headers FROM advisoriesheader";
		
$result = mysqli_query($link,$sql);
if(!$result)
{
    echo mysqli_error($link);
    exit();
}

while($rows = mysqli_fetch_array($result))
{

    $category_list[]= array('category' => $rows['headers']);
}
//echo $category_list[0]['category'];
$val= count($category_list);

?>


<!DOCTYPE html>
<html>
<head>
    <title>ADVISORIES ITEMS</title>
	<link href="styleitemlist.css" rel="stylesheet" type="text/css"/>
	 <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css" id="color-switcher-link">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/fonts.css">
	<link href="styleitemlist.css" rel="stylesheet" type="text/css"/>
	
	 <script src="js/jquery-1.11.1.min.js"></script>
	
    <script src="js/modernizr-2.6.2.min.js"></script>
<script type="text/javascript">
function ConfirmDelete()
{
    var d = confirm('Do you really want to delete data?');
    if(d == false){
        return false;
    }
}


function view(){
$.ajax({
                type: 'POST',
                url: 'advisories.php',
                success: function(data) {	
				
                    console.log("data val :" +data);
					
                   
					
                }				
		});	
}
</script>

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
</head>

	<section id="breadcrumbs" class="light_section with_bottom_border">
        <div class="container">
       
            <div class="row">
                <div class="col-sm-12">
                    <ol class="breadcrumb">
                       
                        <li class="active"><h1><span class="highlight">ADVISORIES DETAILS</span></h1></li>
                    </ol>
                </div>
                
            </div>
        </div>
	</section>

			<?php
			
				for ($i = 0; $i <$val; $i++) 
				{
				// $data = array();?>
				
<body>
			
    <div class="wrapper">
        <div class="content" style="width: 1000px !important;">
            
            <table class="menutable">
                <thead>
                    <tr>
                       
                        
						<th>
                            IMAGE
                        </th>
                        <th>
                            NAME
                        </th>						 
                        <th>
                            DESIGNATION
                        </th>
                        <th>
                            DESCRIPTION
                        </th>
						
                        <th>
							EDIT ACTION
						</th>
						<th>
							DELETE ACTION
						</th>
						
                    </tr>
                </thead>
                <tbody>
				<?php
				//if ($item_list[$i] !='')				
				//{				
				//foreach($item_list[$i] as $key => $value):
				//$data[$key] = $value;
		$stmt = $DB_con->prepare('SELECT userID, advisory_header, name, image_path, designation, description FROM advisories_items ORDER BY userID DESC');
	$stmt->execute();
	
	if($stmt->rowCount() > 0)
	{
		while($row=$stmt->fetch(PDO::FETCH_ASSOC))
		{
			extract($row);
				?>
				
                        <tr>
                            
							
							<td>
								<img src="user_images/<?php echo $row['image_path']; ?>" class="img-rounded" width="56.69px" height="70.87px" />
                            </td>
                            <td>
                                <?php echo $name; ?>
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
                        <tr>
						
                    <?php					
					//endforeach; 	
					//}
					
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
					
<h1 style="text-align:center"  class="advisory-header"><?php  //echo 'header';
echo $category_list[$i]['category'];?></h1>					
					<?php }?>
					
                </tbody>
            </table><br/>
           
				
			
			<br>
			
		
        </div>
    </div>
	
	<section id="copyright" class="light_section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                   <p>&copy; Copyright 2015 - <strong> GURU Information Technology Services Pvt Ltd.</strong></p>
                </div>
                               
            </div>
        </div>
    </section>
</body>
</html>
