
$(document).ready(function(){
	
	$("#name").blur(function(){
	console.log("name.val() :");
		if(!$("#name").val()){		
			$(".contact-form-name-message").text("*Name is required");
			return false;			
		}					
		else {
			$(".contact-form-name-message").hide();
		}
	});	
	
	
	$("#branch").click(function(){
		if(!$('[name=gender]:checked').length){
			$(".contact-form-branch-message").text("*Gender is required");
			return false;					
		}					
		else {
			$(".contact-form-branch-message").hide();
		}
		if($('[name=gender]:checked').length | !$('[name=training]:checked').length){
			$(".contact-form-gender-message").text("*Training is required");
			return false;				
		}
		if($('[name=training]:checked').length)  {
			$(".contact-form-training-message").hide();
		}
	});

	
	$("#branch").blur(function(){
		if(!$("#branch").val()){		
			$(".contact-form-branch-message").text("*Branch is required");
			return false;				
		}					
		else {
			$(".contact-form-branch-message").hide();
		}		
	});	
	
	$("#year").blur(function(){
		if(!$("#year").val()){		
			$(".contact-form-year-message").text("*Year is required");
			return false;				
			}
		else if($("#year").val().length < 9){		
			$(".contact-form-year-message").text("Minimum value is required");
			return false;				
			}					
		else {
			$(".contact-form-year-message").hide();
		}
	});
			
	
	$("#marks").blur(function(){
		if(!$("#marks").val()){		
			$(".contact-form-marks-message").text("*Marks is required");
			return false;				
		}					
		else {
			$(".contact-form-marks-message").hide();
		}
	});
	
	$("#university").blur(function(){
		if(!$("#university").val()){		
			$(".contact-form-university-message").text("*University is required");
			return false;				
		}					
		else {
			$(".contact-form-university-message").hide();
		}
	});	
	
	
	$("#dob").blur(function(){
		if(!$("#dob").val()){
			$(".contact-form-dob-message").text("*DOB is required");
			return false;				
		}
		else {
			$(".contact-form-dob-message").hide();
		}
	});
	
	
	
	$("#address").blur(function(){
		if(!$("#address").val()){		
			$(".contact-form-address-message").text("*Address is required");
			return false;				
		}					
		else {
			$(".contact-form-address-message").hide();
		}
	});
	
	$("#email").blur(function(){
		if(!$("#email").val()){		
			$(".contact-form-email-message").text("*Email is required");
			return false;				
		}					
		else {
			$(".contact-form-email-message").hide();
			
		}
	});
	
	$("#mobile").blur(function(){
		if(!$("#mobile").val()){		
			$(".contact-form-mobile-message").text("*Mobile is required");
			return false;				
		}
		else if($("#mobilenum").val().length < 10){		
			$(".contact-form-mobile-message").text("Enter 10 digit mobile number");
			return false;				
		}					
		else {
			$(".contact-form-mobile-message").hide();
		}
	});	
	
	$("#resume").blur(function(){
		if(!$("#resume").val()){		
			$(".contact-form-resume-message").text("*Resume is required");
			return false;				
		}					
		else {
			$(".contact-form-resume-message").hide();
		}
	});
	
	$("#6_letters_code").blur(function(){
		if(!$("#6_letters_code").val()){		
			$(".contact-form-captcha-message").text("*Captcha is required");
			return false;				
		}
		else if($("#6_letters_code").val() != $("#captchaimg").val()){		
			$(".contact-form-captcha-message").text("Incorrect captcha");
			return false;				
		}
		else {
			$(".contact-form-captcha-message").hide();
		}
	});		
	
   
	

    
});



