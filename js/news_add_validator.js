$(document).ready(function(){
	

	$("#n-subheading").keypress(function(){	
		var	subheading = '';		
		subheading = $("#n-subheading").val();		
		if(subheading != ""){

		var allowedChars = new RegExp("^[A-Za-z ,&]+$");				
			if (!allowedChars.test(subheading)) {
				$(".news-events-add-form-subheading-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".news-events-add-form-subheading-message").hide();
			}
			if(subheading.length == 30){
				console.log("n-name.length :"+subheading.length);			
				$(".news-events-add-form-subheading-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".news-events-add-form-subheading-message").hide();
			}
		}		
	});	
	
	
	
	
});
	
	
	