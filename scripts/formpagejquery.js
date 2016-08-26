function year_valid(){
		$(document).ready(function(){		
			$("#year").blur(function(){
				if(!$("#year").val()){		
					$("#yearmessage").text("Field is empty");									
				}
				else if($("#year").val().length < 4){		
					$("#yearmessage").text("Minimum value is required");									
				}					
				else {
					$("#yearmessage").hide();
				}
			});		
		});
}


function mobile_number_valid(){
		$(document).ready(function(){		
			$("#mobilenum").blur(function(){
				if(!$("#mobilenum").val()){		
					$("#mobilenummessage").text("Field is empty");									
				}
				else if($("#mobilenum").val().length < 10){		
					$("#mobilenummessage").text("Minimum value is required");									
				}					
				else {
					$("#mobilenummessage").hide();
				}
			});		
		});
}