$(document).ready(function(){
	
getadvisories();	


function getadvisories(){


//var xUl = users.find('ul');
var ul = $('ul.list2');
var uld = $('ul.list3');
//var uld = $('div.col-sm-6 to_animate animated slideInRight');
//var div = $('div.col-sm-12 widget to_animate animated expandUp');
//var div = $('div.col-sm-6 to_animate animated slideInLeft');
	console.log("getadvisories()");

		$.getJSON('get_advisories.php', function(data) {
                        /* data will hold the php array as a javascript object */
						
						console.log("data :"+data.length);
						if(data.length!=0){
						//for (var i=0;i<data.length; i++){
							$.each(data, function(key, val) {
                              
							console.log("key :"+ key +" val.userID: "+ key + val.userID);
							console.log(" val.advisory_header: "+ key + val.advisory_header);
							console.log(" val.image_path: "+ key + val.image_path);	
							console.log(" val.name: "+ key + val.name);						 
							console.log(" val.designation: "+ key + val.designation);
							console.log(" val.description: "+ key + val.description);
							//$(".highlight").html(val.advisory_header);
							//$("#image-path").attr('src',"user_images/"+val.image_path);
							//$("#name").html(val.name);
							//$("#designation").html(val.designation);
							//$("#description").html(val.description);
							//txt3.append(val.name);
							
							//$('body').append('<li id="name'+ val.name +'" />');
							//$('body').append('<div id="r">' + val.advisory_header + '</div>');
					//		 $("h3").append(val.advisory_header);
							//div.append('<h3>'+val.advisory_header+'</h3>');
							//div.append('<h3 >' + val.advisory_header + '</h3>');
							 ul.append('<a id="advisory-header" >' + val.advisory_header + ' <br/><br/> </a>');
							 ul.append('<a ><img id="image-path" class="img-rounded" width="56.69px" height="70.87px" src="user_images/' + val.image_path + '"> <br/> </a>');
							console.log("image val :"+$("#image").val()); 
							//ul.append('<img id="image-path" class="img-rounded" width="56.69px" height="70.87px" src="user_images/"' + val.image_path + '>');
							 ul.append('<a id="name" >' + val.name + '<br/> </a>');
							 ul.append('<a id="designation" >' + val.designation + ' <br/><br/><br/> </a>');
							// ul.append('<a id="description" >' + val.description + ' <br/> </a');
							 uld.append('<a id="description" >' + val.description + ' <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </a>');
							
							//$('<a id=description>' + val.description + ' <br/></a>').appendTo('#d');
							
								
							  });
						//}
						
						}
						else{
						console.log("else");
							//$("h4").html("PAGE UNDER CONSTRUCTION");
							$('#page-empty').html("PAGE UNDER CONSTRUCTION");
							//$(".container").text("FREE");
							//ul.append('<a id="page-empty" >PAGE UNDER CONSTRUCTION  </a>');
							return false;
							}

						
						});
              




}















   

	  
	  

	  
	  
	  



});