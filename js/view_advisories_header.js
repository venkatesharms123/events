$(document).ready(function(){
	
getadvisoriesheader();	


function getadvisoriesheader(){


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
							
							 ul.append('<a id="advisory-header" >' + val.advisory_header + ' <br/><br/> </a>');
							
							
								
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