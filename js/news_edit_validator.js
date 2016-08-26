$(document).ready(function(){
	
	$("#n-header").keypress(function(){	
		var	header = '';		
		header = $("#n-header").val();		
		if(header != ""){
		
		
		var allowedChars = new RegExp("^[A-Za-z ,&]+$");
			if (!allowedChars.test(header)) {
				$(".news-events-edit-form-header-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".news-events-edit-form-header-message").hide();
			}
		
			if(header.length == 30){
				console.log("edit-n-header.length :"+header.length);			
				$(".news-events-edit-form-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".news-events-edit-form-header-message").hide();
			}
		}		
	});	
	
	
	
	$("#n-subheading").keypress(function(){	
		var	subheading = '';		
		subheading = $("#n-subheading").val();		
		if(subheading != ""){

			var allowedChars = new RegExp("^[A-Za-z ,&]+$");				
			if (!allowedChars.test(subheading)) {
				$(".news-events-edit-form-subheading-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".news-events-edit-form-subheading-message").hide();
			}
		
			if(subheading.length == 30){
				console.log("n-name.length :"+subheading.length);			
				$(".news-events-edit-form-subheading-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".news-events-edit-form-subheading-message").hide();
			}
		}		
	});	
	
	
	
	
});
	
	
	