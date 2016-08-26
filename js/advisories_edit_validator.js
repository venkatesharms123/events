$(document).ready(function(){
	
	$("#a-header").keypress(function(){	
		var	header = '';		
		header = $("#a-header").val();		
		if(header != ""){	

			var allowedChars = new RegExp("^[A-Za-z ,&]+$");				
			if (!allowedChars.test(header)) {
				$(".advisory-edit-form-header-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".advisory-edit-form-header-message").hide();
			}
			if(header.length == 30){
				console.log("edit-a-header.length :"+header.length);			
				$(".advisory-edit-form-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-edit-form-header-message").hide();
			}
		}		
	});	
	
	
	
	
	$("#a-name").keypress(function(){	
		var	name = '';		
		name = $("#a-name").val();		
		if(name != ""){	

		var allowedChars = new RegExp("^[A-Za-z .]+$");				
		if (!allowedChars.test(name)) {
			$(".advisory-edit-form-name-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".advisory-edit-form-name-message").hide();
			}		
			if(name.length == 30){
				console.log("edit-a-name.length :"+name.length);			
				$(".advisory-edit-form-name-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-edit-form-name-message").hide();
			}
		}		
	});	
	
	$("#a-designation").keypress(function(){	
		var	designation = '';		
		designation = $("#a-designation").val();		
		if(designation != ""){

		var allowedChars = new RegExp("^[A-Za-z .,]+$");				
			if (!allowedChars.test(designation)) {
				$(".advisory-edit-form-designation-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".advisory-edit-form-designation-message").hide();
			}
			if(designation.length == 30){
				console.log("edit-a-designation.length :"+designation.length);			
				$(".advisory-edit-form-designation-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-edit-form-designation-message").hide();
			}
		}		
	});	
	
	
});
	
	
	