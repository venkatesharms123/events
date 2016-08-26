$(document).ready(function(){


		
	$("#firstname").keypress(function(){	
		//var	name = '';		
		var header = $("#firstname").val();		
		if(header != ""){

		var allowedChars = new RegExp("^[A-Za-z &]+$");
		
		if (!allowedChars.test(header)) {
			$(".advisory-add-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".advisory-add-header-message").hide();
			}
			if(header.length == 30){
				console.log("header.length :"+header.length);			
				$(".advisory-add-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-add-header-message").hide();
			}
		}		
	});	
	
	
	$("#firstname").blur(function(){
		console.log("1st name");
		if(!$("#firstname").val()){		
				$(".advisory-add-header-message").text("*Advisory header is required").show();				
				return false;				
			}		
			else {
				$(".advisory-add-header-message").hide();
			}
			
			var allowedChars = new RegExp("^[A-Za-z &]+$");
		
		if (!allowedChars.test($("#firstname").val())) {
			$(".advisory-add-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".advisory-add-header-message").hide();
			}
		});
	
	$("#advisory-save-header").click(function()  { 
	console.log("advisory-save-header");
	
			// var isValid = false;
			if(!$("#firstname").val()){		
				$(".advisory-add-header-message").text("*Advisory header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".advisory-add-header-message").hide();
				insertadvisoryheader();
				
			}
function insertadvisoryheader(){			
	$.ajax({
		url: "insert_advisories_header.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		console.log(" file data : " +data);
		
		
		//jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
		$(".advisory-add-header-message").text(data).show();
		window.location = 'advisory_view_headers.html';
		},
	error: function(){
		jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
	}
	
});
				
}		
	  		//if(isValid==true){
			//	return false;
			//}
		});	 
	
//------------------------------------------------ ADVISORY EDIT HEADER --------------------------------------------------------


	$("#firstname").keypress(function(){	
		//var	name = '';		
		var editHeader = $("#firstname").val();		
		if(editHeader != ""){

		var allowedChars = new RegExp("^[A-Za-z &]+$");
		
		if (!allowedChars.test(editHeader)) {
			$(".advisory-edit-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".advisory-edit-header-message").hide();
			}
			if(editHeader.length == 30){
				console.log("header.length :"+header.length);			
				$(".advisory-edit-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-edit-header-message").hide();
			}
		}		
	});	
	
	
	$("#firstname").blur(function(){
		console.log("1st name");
		if(!$("#firstname").val()){		
				$(".advisory-edit-header-message").text("*Advisory header is required").show();				
				//isValid = true;
				return false;				
			}		
			else {
				$(".advisory-edit-header-message").hide();
			}
			
		var allowedChars = new RegExp("^[A-Za-z &]+$");
		if (!allowedChars.test($("#firstname").val())) {
			$(".advisory-edit-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".advisory-edit-header-message").hide();
			}
		});
	
	$("#advisory-edit-header").click(function()  { 
	
			// var isValid = false;
			if(!$("#firstname").val()){		
				$(".advisory-edit-header-message").text("*Advisory header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".advisory-edit-header-message").hide();
			}
		
	  		//if(isValid==true){
			//	return false;
			//}
		});	 
		
	
	
	
});