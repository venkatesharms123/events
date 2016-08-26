"use strict";

function pieChart() {
	//circle progress bar
	if ((jQuery().easyPieChart) && (jQuery.support.leadingWhitespace)) {
		var count = 0 ;
		var colors = ['#4D91BA', '#5FCCA3', '#FFBB19'];
		jQuery('.chart').each(function(){
				
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+900) {

				jQuery(this).easyPieChart({
			        barColor: colors[count],
					trackColor: '#e4e4e4',
					scaleColor: false,
					scaleLength: false,
					lineCap: 'butt',
					lineWidth: 4,
					size: 180,
					rotate: 0,
					animate: 3000,
					onStep: function(from, to, percent) {
							jQuery(this.el).find('.percent').text(Math.round(percent));
						}
			    });
			}
			count++;
			if (count >= colors.length) { count = 0};
		});
	}
}


jQuery(document).ready(function() {
	///////////
	//Plugins//
	///////////
    //contact form processing
	
	$("#name").blur(function(){	
		var	name = '';		
		name = $("#name").val();
		//console.log("name.val() :" +!isNaN(name));
	
		if(!$("#name").val()){		
			$(".contact-form-name-message").text("*Name is required");
			return false;			
		}					
		else {
			$(".contact-form-name-message").hide();
		}
		
	});	
	
	$("#name").keypress(function(){	
		var	name = '';		
		name = $("#name").val();		
		if(name != ""){		
			if(name.length == 30){
				console.log("name.length :"+name.length);			
				$(".contact-form-name-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".contact-form-name-message").hide();
			}
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

	
	 $("#branch").keypress(function(){
	 var branch = $("#branch").val();
	 console.log("branch :"+branch);
	 console.log("!isNaN(branch) :"+!isNaN(branch));
	 
	 
	 
	 function isValid(str){
		return !/[~`!#@()$%\^*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
		}
	
	 if(branch != ""){
	 
	 var allowedChars = new RegExp("^[A-Za-z& ]+$");
		
		if (!allowedChars.test(branch)) {
		
		//if(!isValid(branch)){
			$(".contact-form-branch-message").text("Character value only allowed").show();
			return false;
			}
		else {
			$(".contact-form-branch-message").hide();
			}
         if(!isNaN(branch)){
		 //console.log("!isValidChar(branch) : "+!isValidChar(branch));
			$(".contact-form-branch-message").text("Numeric value not allowed").show();
			return false;
			}
		else {
			$(".contact-form-branch-message").hide();
			}
		
			
		if(branch.length == 50){
				//console.log("branch.length :"+branch.length);			
				$(".contact-form-branch-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".contact-form-branch-message").hide();
			}
		}		
    });
	
	
	function isValid(str){
			return !/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()~`!&#@$%\^*+=\\[\]\\';,/{}|\\":<>\?]/g.test(str);
		}
		
		function isValidNumber(str){
				return !/[~`!#@()$%\^*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
			}
			function isValidNumber(str){
			return !/[~`!#$%\^*+=\\[\]\-\';,/{}|\\":<>\?]/g.test(str);
		}
	
	$("#year").blur(function(){
		var	batch = 0;		
		batch = $("#year").val();
		//console.log("isNaN(batch) :" +isNaN(batch));		
		/* if(isNaN(batch)){
			$(".contact-form-year-message").text("Numeric value is required").show();
			return false;
			}
		else {
			$(".contact-form-year-message").hide();
		}*/	
		
		
		if(!$("#year").val()){		
			$(".contact-form-year-message").text("*Batch in year: XXXX-YYYY is required").show();
			return false;				
			}					
		else {
			$(".contact-form-year-message").hide();
		}
		
		
		
		var stri = $("#year").val();
		if(!isNaN(stri)){
			$(".contact-form-year-message").text("Enter batch as XXXX-YYYY (2016-2019)").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
		}
			
		if(stri.length!=9)	{
			$(".contact-form-year-message").text("Batch value incomplete").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
		}
		
		var str = $("#year").val();
		var fromYear = str.split("-");
		//var toYear = str.split("-",2);
		console.log("batch fromYear : "+fromYear);
		console.log("batch fromYear[0] : "+fromYear[0]);
		console.log("batch fromYear[1]: "+fromYear[1]);
		//console.log("batch toYear : "+toYear);
		//}
		function isValid(str){
		return !/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!&#@$%\^*+=\\[\]\\';,/{}|\\":<>\?]/g.test(str);
		}
		
		if(!isValid(year)){		
			if(fromYear[0] < 2000){
				$(".contact-form-year-message").text("Batch below 2000 year not allowed in XXXX (XXXX-YYYY)").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
			}			
		if(fromYear[1]==""){
			console.log("i fromYear[1]: "+fromYear[1]);
				$(".contact-form-year-message").text("Enter batch as XXXX-YYYY (2016-2019)").show();
				return false;
			}	
			else {			
				$(".contact-form-year-message").hide();
			}	
			
		
		var d = new Date();
		var n = d.getFullYear();
		var fullYear = n+1;
		console.log("fullYear : "+fullYear);
		
		if(fromYear[0] >= fullYear){
				$(".contact-form-year-message").text("Batch starting from 2000 only in XXXX (XXXX-YYYY)").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
			}
		
			var string = $("#year").val();
			var fromYear = string.split("-");
		
	if(fromYear[1] != ""){
			if(isNaN(fromYear[1])){
				$(".contact-form-year-message").text("Numeric value is required").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();			
			}
			
			if(fromYear[1] >= fullYear){
				$(".contact-form-year-message").text("Batch above current year not allowed in YYYY (XXXX-YYYY)").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
			}
			
			if(fromYear[1] < 2003){
				$(".contact-form-year-message").text("Batch below 2003 year not allowed in YYYY (XXXX-YYYY)").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
			}
			
			
			if(stri.length==9)	{
				var num = fromYear[1];
				//if(!isNaN(fromYear[1])){
				//console.log("i fromYear[1]: "+fromYear[1]);
				//	$(".contact-form-year-message").text(" at len 9 Enter batch as XXXX-YYYY (2016-2019)").show();
				//	return false;
				//}	
				//else {			
				//	$(".contact-form-year-message").hide();
				//}
			
				if(fromYear[1] >= fullYear){
					$(".contact-form-year-message").text("Batch above current year not allowed").show();
					return false;				
				}
				else {
					$(".contact-form-year-message").hide();
				}			
			}			
		}	
		
		}
		
	});
	
	
	 $("#year").keypress(function(){
		var year = $("#year").val();
		console.log("year :"+year);		
		if(year != ""){
		/*	if(isNaN(year) ){
				$(".contact-form-year-message").text("Numeric value is required").show();
				return false;
				}
			else {
				$(".contact-form-year-message").hide();
			}*/
			
		//var value = year.match(/^\d{0,2}(?:\-\d{0,2}){0,1}$/);
		
		
		var allowedChars = new RegExp("^[0-9-]+$");
		//if(!isValid(year)){
		if (!allowedChars.test(year)) {
		//console.log("allowedChars.test(year)): "+allowedChars.test(year)));
		
			$(".contact-form-year-message").text("Invalid character. Numeric value and - only allowed").show();
			return false;
			}		
		else {
			$(".contact-form-year-message").hide();
			var str = $("#year").val();
		var fromYear = str.split("-");
		//var toYear = str.split("-",2);
		console.log("batch str : "+str);
		console.log("batch fromYear[0] : "+fromYear[0]);
		console.log("batch fromYear[1]: "+fromYear[1]);		
		}
		
/*		if(!isValid(year)){
		if(year.length == 4){	
			if(fromYear[0] < 2000){
				$(".contact-form-year-message").text("Batch below 2000 year not allowed").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
			}
		}
		var d = new Date();
		var n = d.getFullYear();
		var fullYear = n+1;
		console.log("fullYear : "+fullYear);
		if(year.length == 9){
			if(fromYear[1] >= fullYear){
				$(".contact-form-year-message").text("Batch above 2016 year not allowed").show();
				return false;				
			}
			else {
				$(".contact-form-year-message").hide();
			}
			}			
		}
*/				
		}			
			
			function isValidNumber(str){
				return !/[~`!#$%\^*+=\\[\]\-\';,/{}|\\":<>\?]/g.test(str);
			}
			
			//var last_char=year.charAt(the_length-1);
			var str2 = "-";
			console.log("index val : "+year.indexOf(str2));
			if(year.length <4){
			//if(year.indexOf(str2) !=4){
			if(!isValidNumber(year)){
				$(".contact-form-year-message").text("Enter batch as XXXX-YYYY (2016-2019)").show();
				return false;
			}	
			else {			
				$(".contact-form-year-message").hide();
			}
			}
			
/*			if(year.length ==9){
			//if(year.indexOf(str2) !=4){
			if(!isValidNumber(year)){
				$(".contact-form-year-message").text("Enter batch as XXXX-YYYY (2016-2019)").show();
				return false;
			}	
			else {			
				$(".contact-form-year-message").hide();
			}
			}
*/			
			
/*			var str2 = "-";			
			if(year.length == 9){	
			console.log("!year.indexOf(str2) != -1 :"+!year.indexOf(str2) != -1);			
			if(!year.indexOf(str2) != -1){
				$(".contact-form-year-message").text("Enter batch as XXXX-YYYY (2016-2019)").show();
				return false;
			}	
			else {			
				$(".contact-form-year-message").hide();
	 		}
				
			}
			
*/				
		
	
    });
			
	
	$("#marks").blur(function(){	
	if(!$("#marks").val()){		
			$(".contact-form-marks-message").text("*Marks in CGPA: (5.00) is required");
			return false;				
		}						
		else {
			$(".contact-form-marks-message").hide();
		}	
		
		var	m = 0;		
		m = $("#marks").val();
		console.log("isNaN(m) :" +isNaN(m));		
		 if(isNaN(m)){
			$(".contact-form-marks-message").text("Numeric value is required").show();
			return false;
			}
		else {
			$(".contact-form-marks-message").hide();
		}	
		
		
		
	});
	
	
	 $("#marks").keypress(function(){
		var marks = $("#marks").val();
		var value = marks.match(/^\d{0,2}(?:\.\d{0,2}){0,1}$/);	
		console.log("marks :"+marks);
		console.log("!isNaN(marks) :"+!isNaN(marks));
		if(marks != ""){
		
		var allowedChars = new RegExp("^[0-9.]+$");
		
		if (!allowedChars.test(marks)) {
		
			//if(isNaN(marks) ){
				$(".contact-form-marks-message").text("Numeric value is required").show();
				return false;
				}
			else {
				$(".contact-form-marks-message").hide();
				}		
			
			if (!value) {
				$(".contact-form-marks-message").text("*Marks in CGPA: (5.00) is required").show();
				return false;
			}
			else {			
				$(".contact-form-marks-message").hide();
			}
		
			if(marks.length == 4){
				$(".contact-form-marks-message").text("Maximum value reached").show();
				return false;
			}
			else {			
				$(".contact-form-marks-message").hide();
	 		}
			
			if(marks > 10){
				$(".contact-form-marks-message").text("Maximum value is 10.00").show();
				return false;
			}
			else {			
				$(".contact-form-marks-message").hide();
			}			
					
			if(marks > 10){
				$(".contact-form-marks-message").text("Maximum value is 10.00").show();
				return false;
			}
			else if(marks < 1){
				$(".contact-form-marks-message").text("Invalid marks").show();
				return false;
			}
			else {			
				$(".contact-form-marks-message").hide();
		}
		}
    });
	
			function isValid(str){
				return !/[~`@()!#$%\^*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
			}
	
	$("#university").blur(function(){
		if(!$("#university").val()){		
			$(".contact-form-university-message").text("*University is required");
			return false;				
		}					
		else {
			$(".contact-form-university-message").hide();
		}
	});

	$("#university").keypress(function(){
		var university = $("#university").val();
		console.log("university :"+university);
		console.log("!isNaN(university) :"+!isNaN(university));
		if(university != ""){
		
		var allowedChars = new RegExp("^[A-Za-z& ]+$");		
		if (!allowedChars.test(university)) {
		
			//if(!isNaN(university) ){
				$(".contact-form-university-message").text("Character value is required").show();
				return false;
				}
			else {
				$(".contact-form-university-message").hide();
				}
			if(university.length == 50){
				$(".contact-form-university-message").text("Maximum value reached").show();
				return false;
			}
			else {			
				$(".contact-form-university-message").hide();
			}
			
	
			
				if(!isValid(university)){
					$(".contact-form-university-message").text("Special character not allowed").show();
				return false;
				}
			else {
				$(".contact-form-university-message").hide();
			}
			
		}		
    });
				
	
	
	$("#dob").blur(function(){
		if(!$("#dob").val()){
			$(".contact-form-dob-message").text("*DOB is required").show();
			return false;				
		}
		else {
			$(".contact-form-dob-message").hide();
		}
		
		var str = $("#dob").val();
		var year = str.split("-",1);
		console.log("dob year : "+year);
		if(year > 1994){
			$(".contact-form-dob-message").text("Invalid year").show();
			return false;				
		}
		else if(year < 1978){
			$(".contact-form-dob-message").text("Invalid year").show();
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
	
	$("#address").keypress(function(){
/*		var address = $("#address").val();
		console.log("address :"+address);
		console.log("address.length :"+address.length);		
		console.log("addresstrim.length :"+address.trim().length);		
		if(address != ""){		
			if(address.length == 120){
				$(".contact-form-address-message").text("Maximum value reached").show();
				return false;
			}
			else {			
				$(".contact-form-address-message").hide();
			}
		}				
*/			
			
    });
	
	$("#email").blur(function(){
		if(!$("#email").val()){		
			$(".contact-form-email-message").text("*Email is required").show();
			return false;				
		}					
		else {
			$(".contact-form-email-message").hide();			
		}
		
		function isValidEmailAddress(emailAddress) {
			var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			return pattern.test(emailAddress);
		};
		var e = $("#email").val();
		//console.log("isemail :"+isValidEmailAddress(e));
		if(!isValidEmailAddress(e)){		
			$(".contact-form-email-message").text("*Please enter a valid email address").show();
			return false;				
		}					
		else {
			$(".contact-form-email-message").hide();			
		}
	});
	
	$("#email").keypress(function(){
		var email = $("#email").val();
		console.log("email :"+email);
		console.log("!isNaN(email) :"+!isNaN(email));
		if(email != ""){			
			if(email.length == 30){
				$(".contact-form-email-message").text("Maximum value reached").show();
				return false;
			}
			else {			
				$(".contact-form-email-message").hide();
			}				
		}		
    });
	
	$("#mobile").blur(function(){
		var	mob = 0;		
		mob = $("#mobile").val();
		if(isNaN(mob)){
			$(".contact-form-mobile-message").text("Numeric value is required").show();
			return false;
			}
		else {
			$(".contact-form-mobile-message").hide();
		}	
		if(!$("#mobile").val()){		
			$(".contact-form-mobile-message").text("*10 digit mobile number is required").show();
			return false;				
		}
		else if($("#mobile").val().length < 10){		
			$(".contact-form-mobile-message").text("Enter 10 digit mobile number").show();
			return false;				
		}					
		else {
			$(".contact-form-mobile-message").hide();
		}
	});


	 $("#mobile").keypress(function(){
	 var mobile = $("#mobile").val();
	 console.log("mobile :"+mobile);
	 console.log("!isNaN(mobile) :"+!isNaN(mobile));
	 if(mobile != ""){
         if(isNaN(mobile) ){
			$(".contact-form-mobile-message").text("Numeric value is required").show();
			return false;
			}
		else {
			$(".contact-form-mobile-message").hide();
			}		
		if(mobile.length == 10){
				$(".contact-form-mobile-message").text("Maximum value reached").show();
				return false;
			}
			else {			
				$(".contact-form-mobile-message").hide();
			}			
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
	
	$("#resume").keypress(function(){	
		var	resume = '';		
		resume = $("#resume").val();		
		if(resume != ""){		
			if(resume.length == 900){
				console.log("resume.length :"+resume.length);			
				$(".contact-form-resume-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".contact-form-resume-message").hide();
			}
		}		
	});	
	
	$("#captcha").blur(function(){
		if(!$("#captcha").val()){		
			$(".contact-form-captcha-message").text("*Captcha is required");
			return false;				
		}		
		else {
			$(".contact-form-captcha-message").hide();
		}	
			
		
		$.ajax({
                type: 'POST',
                url: 'captcha_session_value.php',
                success: function(data) {	
				
                    console.log("data val :" +data);
					console.log("c val :" +$("#captcha").val());

                    if(data != $("#captcha").val()) {
						$(".contact-form-captcha-message").text("Incorrect captcha").show();
						return false;
					}
					
                }				
		});	
		
		
	});

		

	
   
	
    jQuery('form.contact-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.contact-form-respond').remove();
        //checking on empty values
        var formFields = $form.serializeArray();
		
		var isValid = false;
		if(!$("#name").val()) {
			$(".contact-form-name-message").text("*Name is required").show();
			isValid = true;
			//return false;
		}

	   if(!$('[name=gender]:checked').length) {
			$(".contact-form-gender-message").text("*Gender is required").show();	
			isValid = true;			
			//return false;
		}
		else{
			$(".contact-form-gender-message").hide();
		}
		
	   if(!$('[name=training]:checked').length ){
			$(".contact-form-training-message").text("*Training type is required").show();
			isValid = true;		
			//return false;
	   }
	   else{
			$(".contact-form-training-message").hide();
		}
	   
	   if(!$("#branch").val()){
			$(".contact-form-branch-message").text("*Branch is required").show();
						isValid = true;
			//return false;
		}
	   if(!$("#year").val()){
			$(".contact-form-year-message").text("*Batch in year: XXXX-YYYY is required").show();
						isValid = true;
			//return false;
		}
 
		if(!$("#marks").val()){
			$(".contact-form-marks-message").text("*Marks in CGPA: (5.00) is required").show();
						isValid = true;
			//return false;
		}
		if(!$("#university").val()){
			$(".contact-form-university-message").text("*University is required").show();
						isValid = true;
			//return false;
		}
		if(!$("#dob").val()){
			$(".contact-form-dob-message").text("*DOB is required").show();
			isValid = true;			
			//return false;
		}		
		if(!$("#address").val()){
			$(".contact-form-address-message").text("*Address is required").show();
						isValid = true;
			//return false;
		}
		if(!$("#email").val()){
			$(".contact-form-email-message").text("*Email is required").show();
						isValid = true;
			//return false;
		}
		if(!$("#mobile").val()){
			$(".contact-form-mobile-message").text("*10 digit mobile number is required").show();
			//return false;
		}
		if(!$("#resume").val()){
			$(".contact-form-resume-message").text("*Resume is required").show();
						isValid = true;
			//return false;
		}
		if(!$("#captcha").val()) {		
			$(".contact-form-captcha-message").text("*Captcha is required").show();
			isValid = true;			
			//return false;
		}
//		return false;
//	}
//	else{
//	return true;
//	}
		//return false;
		
		console.log("after false");
		
		if(isValid==false){
		var request = $form.serialize();
        var ajax = jQuery.post( "insert.php", request )
            .done(function( data ) {
			console.log("sending form data to PHP server if fields are not empty");
			console.log("data : " +data);
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">'+data+'</span>');
				
		})
            .fail(function( data ) {
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>');
        
		})
		
		}
        /*for (var i = formFields.length - 1; i >= 0; i--) {
        	if (!formFields[i].value.length) {
			//console.log("checking on empty values");
			//console.log("length: "+formFields[i].value.length);
						//console.log("name: "+formFields[i].name);
			//var c = document.getElementById("captcha").value;
			//	console.log("c: "+c);
				//var d = document.getElementById("captchaimg").value;
				//console.log("c: "+String(d));
				
        		$form.find('[name="' + formFields[i].name + '"]').addClass('invalid').on('focus', function()
				{
				jQuery(this).removeClass('invalid')});        	
			};
			
			
			if (formFields[i].value.length) {				
				var ajax = jQuery.post( "captcha_session_value.php", request )
				.done(function( data ) {				
				console.log(" session data : " +data);
				var captchafield = document.getElementById("captcha").value;
				console.log(" captchafield : " +captchafield);
				if(data != captchafield){
				document.getElementById("captcha").style.border = "solid #4878b6";
					return false;
				}          
				
		})
            .fail(function( data ) {
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">Session error. Reload the page.</span>');
        
		})
								
				return;
				
			};
			
        };*/
        //if one of form fields is empty - exit
/*        if ($form.find('[name]').hasClass('invalid')) {		
		console.log("if one of form fields is empty - exit");			
			
			var a = 0, rdbtn=document.getElementsByName("gender")
				for(i=0;i<rdbtn.length;i++) {
				if(rdbtn.item(i).checked == false) {
					a++;
					}
				}
				if(a == rdbtn.length) {				
				document.getElementById("gen").style.border = "solid #4878b6";	
				}
			else{
				document.getElementById("gen").style.border = "";
			}
			
			
			var b = 0, rdbtns=document.getElementsByName("training")
				for(i=0;i<rdbtns.length;i++) {
				if(rdbtns.item(i).checked == false) {
					b++;
					}
				}
				if(b == rdbtns.length) {				
				document.getElementById("trainingval").style.border = "solid #4878b6";	
			}
			else{
				document.getElementById("trainingval").style.border = "";
			}			
			
			document.getElementById("calendar").style.border = "";
			
			if(!$("#dob").val()){
			 document.getElementById("calendar").style.border = "solid #4878b6";	
			}				
			
        	return;
        };
		
	*/
	
	
		
        //sending form data to PHP server if fields are not empty
        
		
		
		
		
		
		
		
		
		
    });
    

	//mainmenu
	if (jQuery().superfish) {
		jQuery('ul.sf-menu').superfish({
			delay:       300,
			animation:   {opacity:'show'},
			animationOut: {opacity: 'hide'},
			speed:       'fast',
			disableHI:   false,
			cssArrows:   true,
			autoArrows:  true
		});
	}
	jQuery('#toggle_mobile_menu, #mainmenu a').on('click', function(){
		jQuery('#header').toggleClass('mobile-active');
	});

	//top (header) search
	jQuery('#toggle_search').on('click', function() {
		jQuery(this).toggleClass('active');
		if (jQuery(this).hasClass('active')) {
			jQuery('#header .widget_search').animate({
				height: '100%'
			}, 500);
		} else {
			jQuery('#header .widget_search').animate({
				height: 0
			}, 300);
		}
	});
 
	//toTop
	if (jQuery().UItoTop) {
        jQuery().UItoTop({ easingType: 'easeOutQuart' });
    }

	//parallax
	if (jQuery().parallax) {
		jQuery('#progress').parallax("50%", 0.4);
		jQuery('#skills').parallax("50%", 0.3);
	}

    //prettyPhoto
    if (jQuery().prettyPhoto) {
	   	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
	   		hook: 'data-gal',
			theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
	  	});
	}

   	//tooltip
   	if (jQuery().tooltip) {
		jQuery('[data-toggle="tooltip"]').tooltip();
	}

   	//carousel
   	if (jQuery().carousel) {
		jQuery('.carousel').carousel();
	}

	//owl carousel
	if (jQuery().owlCarousel) {
		jQuery("#related-event-items-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	items: 3,
	    	itemsDesktop: [1199,3],
	    	itemsDesktopSmall: [979,2],
	    	itemsTablet: [768,1],
	    	itemsMobile: [479,1]

	    });
		
		jQuery("#partners-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	items: 3,
	    	itemsDesktop: [1199,3],
	    	itemsDesktopSmall: [979,2],
	    	itemsTablet: [768,1],
	    	itemsMobile: [479,1]

	    });

	    jQuery("#related-products-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	items: 3,
	    	itemsDesktop: [1199,3],
	    	itemsDesktopSmall: [979,2],
	    	itemsTablet: [768,1],
	    	itemsMobile: [479,1]

	    });
	    jQuery(".owl-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	// items: 4,

	    });

	}
    
    //nice scroll
	// if (jQuery().niceScroll) {
	// 	jQuery("html").niceScroll({
	// 		cursorcolor: '#fbd81a',
	// 		cursorborder: 'none',
	// 		cursorborderradius: '0',
	// 		cursorwidth: '8px'
	// 	});
	// }


	//single page localscroll and scrollspy
	var navHeight = jQuery('#header').outerHeight(true);
	jQuery('body').scrollspy({
		target: '#mainmenu_wrapper',
		offset: navHeight
	});
	if (jQuery().localScroll) {
		jQuery('#mainmenu, #land, #mainslider').localScroll({
			duration:900,
			easing:'easeInOutQuart',
			offset: -navHeight+10
		});
		
	}
	/////////
	//shop///
	/////////
	jQuery('#toggle_shop_view').on('click', function( e ) {
		e.preventDefault();
		jQuery(this).toggleClass('grid');
		jQuery('#product_listing').toggleClass('list');
	});
	//zoom image
	if (jQuery().elevateZoom) {
		jQuery('#product-image').elevateZoom({
			gallery: 'product-image-gallery',
			cursor: 'pointer', 
			galleryActiveClass: 'active', 
			responsive:true, 
			loadingIcon: 'img/AjaxLoader.gif'
		});
	}
	//add review button
	jQuery('#add_review a').on('click', function( e ) {
		jQuery('#product-tabs a[href="#product-reviews"]').tab('show');
	});
	//product counter
	jQuery('.plus, .minus').on('click', function( e ) {
		var numberField = jQuery(this).parent().find('[type="number"]');
		var currentVal = numberField.val();
		var sign = jQuery(this).val();
		if (sign === '-') {
			if (currentVal > 1) {
				numberField.val(parseFloat(currentVal) - 1);
			}
		} else {
			numberField.val(parseFloat(currentVal) + 1);
		}
	});
	//remove product from cart
	jQuery('a.remove').on('click', function( e ) {
		e.preventDefault();
		jQuery(this).closest('tr').remove();
	});

	//comingsoon counter
	if (jQuery().countdown) {
		jQuery('#countdown').countdown({until: new Date(2015, 5-1, 15)});
	};


});


jQuery(window).load(function(){
	
	//chart
	pieChart();

	// setTimeout(function(){
	// 	jQuery('.progress-bar').addClass('stretchRight');
	// }, 600);

	//bxslider 
	if (jQuery().bxSlider) {
		//homepage slider
		jQuery('#land .bxslider').bxSlider({
			adaptiveHeight: true,
			auto: true,
			mode: 'vertical',
			slideMargin: 0
		});
		//regular slider
		// jQuery('.bxslider').bxSlider();
	}
	//fractionslider
	if (jQuery().fractionSlider) {
		var $mainSlider = jQuery('#mainslider');
		jQuery('.slider').fractionSlider({
			'fullWidth': 			true,
			'responsive': 			true,
			'dimensions': 			"1920,550",
		    'increase': 			true,
			'slideEndAnimation': 	false,
			'timeout' : 			3000,
			'slideTransition' :    'none',
			'slideTransitionSpeed' :1000,
			'transitionIn':        'fade',
			'transitionOut':       'fade',
			'controls':             true,
			'pager':                true 

		});
	}

	//flexslider
	if (jQuery().flexslider) {
		//var $mainSlider = jQuery('#mainslider');
		jQuery("#mainslider .flexslider").flexslider({
			animation: "fade",
			useCSS: true,
			controlNav: true,   
			directionNav: false,
		    prevText: "",
		    nextText: "",
			smoothHeight: false,
			slideshowSpeed:8000,
			animationSpeed:300,
			start: function( slider ) {
				slider.find('.slide_description').children().css({'visibility': 'hidden'});
				slider.find('.flex-active-slide .slide_description').children().each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
				setTimeout(function(){
						self.addClass("animated "+animationClass);
					}, index*200);
				});
			},
			after :function( slider ){
				slider.find('.flex-active-slide .slide_description').children().each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
				setTimeout(function(){
						self.addClass("animated "+animationClass);
					}, index*200);
				});
			},
			end :function( slider ){
				slider.find('.slide_description').children().each(function() {
					jQuery(this).attr('class', '');
				});
			}
		});

		jQuery(".flexslider").flexslider({
			animation: "fade",
			useCSS: true,
			controlNav: true,   
			directionNav: false,
		    prevText: "",
		    nextText: "",
			//animationLoop: false,
			smoothHeight: true,
			slideshowSpeed:5000,
			animationSpeed:800,
			after :function( slider ){
				//console.log(slider.find('.slide_description').children());
			  	//bg-color1 - class for #mainslider
			  	//var currentClass = $mainSlider.find('.flex-active-slide').attr('data-bg');
			  	//$mainSlider.attr('class', currentClass);
			}
		});
	}


	//stick header to top
	var affixHeader = jQuery('#header');
	var headerOffset = jQuery('#topline').outerHeight(true);
	jQuery(affixHeader).affix({
		offset: {
			top: headerOffset,
			bottom: 0
		}
	});
	//animating header
	// jQuery(affixHeader).on('affix.bs.affix', function () {
	// 	if (jQuery(this).hasClass('animating')) {
	// 		return;
	// 	} else {
	// 		jQuery(this).toggleClass('animating').animate({opacity:0, top: -jQuery(this).height()}, 10).delay(400).animate({opacity:1, top: 0}, 400).queue(function(){
	// 			jQuery(this).toggleClass('animating');
	// 			jQuery(this).dequeue();
	// 		});
	// 	}
	// });
	// jQuery(affixHeader).on('affix-top.bs.affix', function () {
	// 	if (jQuery(this).hasClass('animating')) {
	// 		return;
	// 	} else {
	// 		jQuery(this).toggleClass('animating').animate({opacity:0}, 10).delay(100).animate({opacity:1}, 500).queue(function(){
	// 			jQuery(this).toggleClass('animating');
	// 			jQuery(this).dequeue();
	// 		});
	// 	}
	// });
	
	//wrap header with div for smooth sticking
	var headerHeight = affixHeader.outerHeight(true);
	affixHeader.wrap('<div id="header_wrapper"></div>').parent().css({height: headerHeight}); //wrap header for smooth stick and unstick
	
	//if header has different height on afixed and affixed-top positions - correcting wrapper height
	jQuery(affixHeader).on('affixed-top.bs.affix', function () {
		affixHeader.parent().css({height: affixHeader.outerHeight(true)});
	});

	//preloader
	jQuery(".preloaderimg").fadeOut();
	jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
		jQuery(this).remove();
	});

	jQuery('body').delay(1000).scrollspy('refresh');


	
	//animation to elements on scroll
	if (jQuery().appear) {
		// jQuery('.to_animate').appear().css({opacity: 0});
		jQuery('.to_animate').appear().css({'visibility': 'hidden'});
		jQuery('.to_animate').filter(':appeared').each(function(index){
			var self = jQuery(this);
			var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
			var animationDelay = !self.data('delay') ? 270 : self.data('delay');
			setTimeout(function(){
				self.addClass("animated " + animationClass);
			}, index * animationDelay);
		});

		jQuery('body').on('appear', '.to_animate', function(e, $affected ) {
			jQuery($affected).each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
				var animationDelay = !self.data('delay') ? 270 : self.data('delay');
				setTimeout(function(){
					self.addClass("animated " + animationClass);
				}, index * animationDelay);
			});
		});
	}

	//counters init on scroll
	if (jQuery().appear) {
		jQuery('.counter').appear();
		jQuery('.counter').filter(':appeared').each(function(index){
			if (jQuery(this).hasClass('counted')) {
				return;
			} else {
				jQuery(this).countTo().addClass('counted');
			}
		});
		jQuery('body').on('appear', '.counter', function(e, $affected ) {
			jQuery($affected).each(function(index){
				if (jQuery(this).hasClass('counted')) {
					return;
				} else {
					jQuery(this).countTo().addClass('counted');
				}
				
			});
		});
	}


	//flickr
	
});

jQuery(window).resize(function(){

	jQuery('body').scrollspy('refresh');
	jQuery("#header_wrapper").css({height: jQuery('#header').outerHeight(true)}); //editing header wrapper height for smooth stick and unstick
	
});

jQuery(window).scroll(function() {

	//circle progress bar
	pieChart();


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


//-------------------NEWS & EVENTS ADD FORM SUBMIT------------------------------------------
    jQuery('form.news-events-add-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.news_events-add-form-respond').remove();
        //checking on empty values
        var formFields = $form.serializeArray();
		
		var isValid = false;
		
		if(!$("#n-header").val()){
			$(".news-events-add-form-header-message").text("*News & Events header is required").show();
				isValid = true;
			//return false;
		}
		
		if(!$("#n-subheading").val()) {
			$(".news-events-add-form-subheading-message").text("*Sub heading is required").show();
			isValid = true;
			//return false;
		}

	   
	   
	   if(!$("#n-image").val()){
			$(".news-events-add-form-image-message").text("*Image is required").show();
						isValid = true;
			//return false;
		}
	   
		
			
		if(!$("#n-description").val()){
			$(".news-events-add-form-description-message").text("*Description is required").show();
						isValid = true;
			//return false;
		}
		
		
	if(isValid==false){
		
		$.ajax({
		url: "news_items_save.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		
		
		jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
		window.location = 'news_details_index.php';
		},
	error: function(){
		jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
	} 	        
});
		
		
		
		var request = $form.serialize();
        var ajax = jQuery.post( "", request )
            .done(function( data ) {
			console.log("nheader : " +$("#n-header").val());
			console.log("nsubheading : " +$("#n-subheading").val());
			console.log("nimage: " +$("#n-image").val());
			
			console.log("ndescription : " +$("#n-description").val());
			//console.log("sending form data to PHP server if fields are not empty");
			//console.log("data : " +data);
			//console.log("done : " +data);
              //  jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
				
			})
            .fail(function( data ) {
			//console.log("fail : " +data);
                //jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>');
        
			})
		
		}
      
    });
	
	
	
//-----------------NEWS AND EVENTS ADD FORM BLUR----------------------------------
	$("#n-header").blur(function(){
		if(!$("#n-header").val()){		
			$(".news-events-add-form-header-message").text("*News & Events header is required").show();				
			return false;
		}	
		else {
			$(".news-events-add-form-header-message").hide();
		}		
	});
	
	$("#n-subheading").blur(function(){
		if(!$("#n-subheading").val()){		
			$(".news-events-add-form-subheading-message").text("*Sub heading is required").show();				
			return false;
		}	
		else {
			$(".news-events-add-form-subheading-message").hide();
		}		
	});	
	
	

	
	$("#n-description").blur(function(){
		if(!$("#n-description").val()){		
			$(".news-events-add-form-description-message").text("*Description is required").show();				
			return false;
		}	
		else {
			$(".news-events-add-form-description-message").hide();
		}		
	});


	
// ----------------------NEWS & EVENTS EDIT FORM SUBMIT------------------------
jQuery('form.news-events-edit-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.news_events-edit-form-respond').remove();
        //checking on empty values
        var formFields = $form.serializeArray();
		
		var isValid = false;
		
		if(!$("#n-header").val()){
			$(".news-events-edit-form-header-message").text("*News & Events header is required").show();
				isValid = true;
			//return false;
		}
		
		if(!$("#n-subheading").val()) {
			$(".news-events-edit-form-subheading-message").text("*Sub heading is required").show();
			isValid = true;
			//return false;
		}

	   
	   
	  // if(!$("#n-image").val() & !$("#edit-image-p").val()){
		//	$(".news-events-edit-form-image-message").text("*Image is required").show();
		//				isValid = true;
			//return false;
		//}
	   
		
			
		if(!$("#n-description").val()){
			$(".news-events-edit-form-description-message").text("*Description is required").show();
						isValid = true;
			//return false;
		}
		
	if(isValid == false){
		var str = $(location).attr('href');
		var split = str.split("?");
		console.log(" split[1] : " +split[1]);
		var id = split[1];	
$.ajax({
		url: "news_edit_save.php?" +id,
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		 
		//console.log(" href : " +href);
		console.log(" file data : " +data);
		
		 jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
		console.log("nheader : " +$("#n-header").val());
			console.log("nsubheading : " +$("#n-subheading").val());
			console.log("nimage: " +$("#n-image").val());
			
			console.log("ndescription : " +$("#n-description").val());
			window.location.href='news_details_index.php';
		},
	error: function(){
	 jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
	} 	        
});
		
		
		
		
		var request = $form.serialize();
        var ajax = jQuery.post( "", request )
            .done(function( data ) {
			console.log("nheader : " +$("#n-header").val());
			console.log("nname : " +$("#n-name").val());
			console.log("nimage: " +$("#n-image").val());
		
			console.log("ndescription : " +$("#n-description").val());
			//console.log("sending form data to PHP server if fields are not empty");
			//console.log("data : " +data);
			//console.log("done : " +data);
               // jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
				
			})
            .fail(function( data ) {
			console.log("fail : " +data);
                //jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
        
			})
		
		}
      
    });
      
   
	
	
//  ----------------------- NEWS & EVENTS EDIT FROM BLUR ----------------------	
	$("#n-header").blur(function(){
		if(!$("#n-header").val()){		
			$(".news-events-edit-form-header-message").text("*News & Events header is required").show();				
			return false;
		}	
		else {
			$(".news-events-edit-form-header-message").hide();
		}		
	});
	
	$("#n-subheading").blur(function(){
		if(!$("#n-subheading").val()){		
			$(".news-events-edit-form-subheading-message").text("*Sub heading is required").show();				
			return false;
		}	
		else {
			$(".news-events-edit-form-subheading-message").hide();
		}		
	});	
	
	

	
	$("#n-description").blur(function(){
		if(!$("#n-description").val()){		
			$(".news-events-edit-form-description-message").text("*Description is required").show();				
			return false;
		}	
		else {
			$(".news-events-edit-form-description-message").hide();
		}		
	});

// -------------------------------- ADVISORY EDIT FORM--------------------------	
	jQuery('form.advisory-edit-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.advisory-edit-form-respond').remove();
        //checking on empty values
        var formFields = $form.serializeArray();
		
		var isValid = false;
		console.log("called");
		
		if(!$("#a-header").val()){
			$(".advisory-edit-form-header-message").text("*Advisory header is required").show();
				isValid = true;
			//return false;
		}
		
		if(!$("#a-name").val()) {
			$(".advisory-edit-form-name-message").text("*Name is required").show();
			isValid = true;
			//return false;
		}

	   
	   
	   
		if(!$("#a-designation").val()){
			$(".advisory-edit-form-designation-message").text("*Designation is required").show();
						isValid = true;
			//return false;
		}
			
		if(!$("#a-description").val()){
			$(".advisory-edit-form-description-message").text("*Description is required").show();
						isValid = true;
			//return false;
		}
			//var pathname = window.location.href;  
			//console.log(" file pathname : " +pathname);
			
			//console.log(" href attr : " +$(location).attr('href'));
			
		
		
		if(isValid==false){
		
		var str = $(location).attr('href');
		var split = str.split("?");
		console.log(" split[1] : " +split[1]);
		var id = split[1];
		//urlvalue= "advisory_edit_save.php?" + id ;
		//console.log(" urlvalue wit hi : " + id + 'hi');
		//console.log(" urlvalue : " + urlvalue);
		
		
		$.ajax({
		url: "advisory_edit_save.php?" +id,
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		 
		//console.log(" href : " +href);
		console.log(" file data : " +data);
		
		 jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
		console.log("aheader : " +$("#a-header").val());
			console.log("aname : " +$("#a-name").val());
			console.log("aimage: " +$("#a-image").val());
			console.log("adesignation : " +$("#a-designation").val());
			console.log("adescription : " +$("#a-description").val());
			window.location.href='advisories_details_index.php';
		},
	error: function(){
	 jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
	} 	        
});
		
		
		
		
		var request = $form.serialize();
        var ajax = jQuery.post( "", request )
            .done(function( data ) {
			console.log("aheader : " +$("#a-header").val());
			console.log("aname : " +$("#n-name").val());
			console.log("aimage: " +$("#a-image").val());
			console.log("adesignation : " +$("#a-designation").val());
			console.log("adescription : " +$("#a-description").val());
			//console.log("sending form data to PHP server if fields are not empty");
			//console.log("data : " +data);
			//console.log("done : " +data);
               // jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
				
			})
            .fail(function( data ) {
			console.log("fail : " +data);
                //jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
        
			})
		
		}
      
    });
	

//-------------------------------ADVISORY EDIT FORM BLUR	----------------------
	$("#a-header").blur(function(){
		if(!$("#a-header").val()){		
			$(".advisory-edit-form-header-message").text("*Advisory header is required").show();				
			return false;
		}	
		else {
			$(".advisory-edit-form-header-message").hide();
		}		
	});
	
	$("#a-name").blur(function(){
		if(!$("#a-name").val()){		
			$(".advisory-edit-form-name-message").text("*Name is required").show();				
			return false;
		}	
		else {
			$(".advisory-edit-form-name-message").hide();
		}		
	});	
	
	
	$("#a-designation").blur(function(){
		if(!$("#a-designation").val()){		
			$(".advisory-edit-form-designation-message").text("*Designation is required").show();				
			return false;
		}	
		else {
			$(".advisory-edit-form-designation-message").hide();
		}		
	});
	
	$("#a-description").blur(function(){
		if(!$("#a-description").val()){		
			$(".advisory-edit-form-description-message").text("*Description is required").show();				
			return false;
		}	
		else {
			$(".advisory-edit-form-description-message").hide();
		}		
	});
	
	

