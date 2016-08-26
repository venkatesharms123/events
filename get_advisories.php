<?php
error_reporting( ~E_NOTICE);
include 'connection.php';
//header('Content-type: application/json',true);
header("Content-type: text/javascript",true);
/*
$item_list ='';
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

$val= count($category_list);

		for($i=0; $i<$val; $i++)
		{

		$header=$category_list[$i]['category'];
		//echo $header;
		//Read item information from database
		$sql = "SELECT userID, advisory_header, name, image_path,designation,
				description FROM advisories_items
				WHERE advisory_header='$header'";
		
		$result = mysqli_query($link,$sql);
		if(!$result)
		{
			echo mysqli_error($link);
			exit();
		}

		while($rows = mysqli_fetch_array($result))
			{
			
		//echo 	json_encode($rows);
		//Loop through each row on array and store the data to $item_list[]
		$item_list[$i][] =  array('userID' => $rows['userID'],
								'item_header' => $rows['advisory_header'],
								'name' => $rows['name'],                         
								'image_path' => $rows['image_path'],
								'designation' => $rows['designation'],
								
								'description' => $rows['description']
								);
						
	
			}
				
		
	}
	
	$data = array();
	
	for ($i = 0; $i <$val; $i++) 
					{
					
						if($item_list[$i]!='')	{
				 
							foreach($item_list[$i] as $key => $value):
								$data[$key] = $value;
				
				//echo $val;
								//echo "userID :".$value['userID'];
								
								//echo "item_header :".$value['item_header'];
                          
								//echo "image_path  : ".$value['image_path']; 
                           
								//echo "designation  : ".$value['designation']; 
                           
								//echo "description  : ".$value['description'];
					
							
							endforeach; 
						}
						
						
						$itemlist =array (array("userID" => $value['userID'],
								"advisory_header" => $value['item_header'],
								"name" => $value['name'],                         
								"image_path" => $value['image_path'],
								"designation" => $value['designation'],
								
								"description" => $value['description'] )
								);
						echo json_encode($itemlist);
		
					}				
								//echo '{"users":'.json_encode($itemlist).'}';

								//echo json_encode(($itemlist), JSON_FORCE_OBJECT);
								//echo 'test';
						
						
		/*	echo json_encode(array("userID" => $value['userID'],
								"advisory_header" => $value['item_header'],
								"name" => $value['name'],                         
								"image_path" => $value['image_path'],
								"designation" => $value['designation'],
								
								"description" => $value['description']
								));	*/	
	
	
	
					
					
/*					
$arr =	 array ( array(
                "first_name" => "John",
                "last_name" => "Doe",
                "age" => "47",
                "email" => "john_doe@example.com"
        )
);
echo json_encode($arr);*/

	//echo json_encode($itemlist);	
$return_arr = array();	

$sql = "SELECT userID, advisory_header, name, image_path,designation,
				description FROM advisories_items
				";
		
		$result = mysqli_query($link,$sql);
		if(!$result)
		{
			echo mysqli_error($link);
			exit();
		}

		while($rows = mysqli_fetch_array($result))
			{
			
			$row_array['userID'] = $rows['userID'];
			$row_array['advisory_header'] = $rows['advisory_header'];
			$row_array['name'] = $rows['name'];
			$row_array['image_path'] = $rows['image_path'];
			$row_array['designation'] = $rows['designation'];
			$row_array['description'] = $rows['description'];

			array_push($return_arr,$row_array);
			
			}
			
			
			echo json_encode($return_arr);
				
				
?>
