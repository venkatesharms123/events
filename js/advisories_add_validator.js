$(document).ready(function(){
	

	$("#a-name").keypress(function(){	
		var	name = '';		
		name = $("#a-name").val();
		
		if(name != ""){	
		var allowedChars = new RegExp("^[A-Za-z .]+$");				
		if (!allowedChars.test(name)) {
			$(".advisory-add-form-advisory-name-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".advisory-add-form-advisory-name-message").hide();
			}
		
		
			if(name.length == 30){
				console.log("a-name.length :"+name.length);			
				$(".advisory-add-form-advisory-name-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-add-form-advisory-name-message").hide();
			}
		}		
	});	
	
	$("#a-designation").keypress(function(){	
		var	designation = '';		
		designation = $("#a-designation").val();		
		if(designation != ""){	

		var allowedChars = new RegExp("^[A-Za-z .,]+$");				
		if (!allowedChars.test(designation)) {
			$(".advisory-add-form-advisory-designation-message").text("Character value only allowed").show();
				return false;			
			}					
			else {
				$(".advisory-add-form-advisory-designation-message").hide();
			}
				
			if(designation.length == 30){
				console.log("a-designation.length :"+designation.length);			
				$(".advisory-add-form-advisory-designation-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".advisory-add-form-advisory-designation-message").hide();
			}
		}		
	});	
	
	
	
	
	//-------------------------------ADVISORY ADD FORM BLUR	----------------------
	$("#a-header").blur(function(){
		if(!$("#a-header").val()){		
			$(".advisory-add-form-advisory-header-message").text("*Advisory header is required").show();				
			return false;
		}	
		else {
			$(".advisory-add-form-advisory-header-message").hide();
		}		
	});
	
	$("#a-name").blur(function(){
		if(!$("#a-name").val()){		
			$(".advisory-add-form-advisory-name-message").text("*Name is required").show();				
			return false;
		}	
		else {
			$(".advisory-add-form-advisory-name-message").hide();
		}		
	});	
	
	
	$("#a-designation").blur(function(){
		if(!$("#a-header").val()){		
			$(".advisory-add-form-advisory-designation-message").text("*Designation is required").show();				
			return false;
		}	
		else {
			$(".advisory-add-form-advisory-designation-message").hide();
		}		
	});
	
	$("#a-description").blur(function(){
		if(!$("#a-description").val()){		
			$(".advisory-add-form-advisory-description-message").text("*Description is required").show();				
			return false;
		}	
		else {
			$(".advisory-add-form-advisory-description-message").hide();
		}		
	});
	
	
	
//--------------------ADVISORY ADD FORM SUBMIT-----------------------------
    jQuery('form.advisory-add-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.advisory-add-form-respond').remove();
        //checking on empty values
        var formFields = $form.serializeArray();
		
		var isValid = false;
		
		if(!$("#a-header").val()){
			$(".advisory-add-form-advisory-header-message").text("*Advisory header is required").show();
				isValid = true;
			//return false;
		}
		
		if(!$("#a-name").val()) {
			$(".advisory-add-form-advisory-name-message").text("*Name is required").show();
			isValid = true;
			//return false;
		}

	   
	   
	   if(!$("#a-image").val()){
			$(".advisory-add-form-advisory-image-message").text("*Image is required").show();
						isValid = true;
			//return false;
		}
	   
		if(!$("#a-designation").val()){
			$(".advisory-add-form-advisory-designation-message").text("*Designaton is required").show();
						isValid = true;
			//return false;
		}
			
		if(!$("#a-description").val()){
			$(".advisory-add-form-advisory-description-message").text("*Description is required").show();
						isValid = true;
			//return false;
		}
		
		
	if(isValid==false){
		
		$.ajax({
		url: "advisory_items_save.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		console.log(" file data : " +data);
		
		
		jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
		window.location = 'advisories_details_index.php';
		},
	error: function(){
		jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
	} 	        
});
		
		
		
		var request = $form.serialize();
        var ajax = jQuery.post( "", request )
            .done(function( data ) {
			console.log("aheader : " +$("#a-header").val());
			console.log("aname : " +$("#a-name").val());
			console.log("aimage: " +$("#a-image").val());
			console.log("adesignation : " +$("#a-designation").val());
			console.log("adescription : " +$("#a-description").val());
			//console.log("sending form data to PHP server if fields are not empty");
			//console.log("data : " +data);
			//console.log("done : " +data);
                //jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
				
			})
            .fail(function( data ) {
			//console.log("fail : " +data);
                //jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>');
        
			})
		
		}
      
    });
		
	
	
	
	
	
});
	
	
	