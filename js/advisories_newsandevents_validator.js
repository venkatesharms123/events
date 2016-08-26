$(document).ready(function(){  
	
	$("#advisories-save").click(function()  {
   
	console.log("frmvalue : ");
     //   $("#frmvalue").submit(function()
     //  {
	 //	console.log("frmvalue : ");
	 var isValid = false;
			if(!$("#headerlist").val()){		
				$(".advisory-frmvalue-header-message").text("*Advisory header is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".advisory-frmvalue-header-message").hide();
			}
			
			if(!$("#name").val()){		
				$(".advisory-frmvalue-name--message").text("*Name is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".advisory-frmvalue-name--message").hide();
			}
			
			if(!$("#designation").val()){		
				$(".advisory-frmvalue-designation--message").text("*Designation is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".advisory-frmvalue-designation--message").hide();
			}
			
			if(!$("#description").val()){		
				$(".advisory-frmvalue-description--message").text("*Description is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".advisory-frmvalue-description--message").hide();
			}
			
			//console.log("file.val() : "+$("#file").val());
			if(!$("#file").val()){		
				$(".advisory-frmvalue-image-message").text("*Image is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".advisory-frmvalue-image--message").hide();
			}
      //  });     
      //  $("#frmvalue").submit(); //invoke form submission
	  
	  
	  		if(isValid==true){
				return false;
			}
			console.log("newsfile.val() : "+$("#news-file").val());
		});
	
	
	
	$("#news-save").click(function()  {   
	
		var isValid = false;
			if(!$("#news-headerlist").val()){		
				$(".news-frmvalue-header-message").text("*News & Events header is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".news-frmvalue-header-message").hide();
			}
			
			if(!$("#news-subheading").val()){		
				$(".news-frmvalue-subheading-message").text("*Sub heading is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".news-frmvalue-subheading-message").hide();
			}
			
			
			
			if(!$("#news-description").val()){		
				$(".news-frmvalue-description-message").text("*Description is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".news-frmvalue-description-message").hide();
			}
			
			//console.log("newsfile.val() : "+$("#news-file").val());
			if(!$("#news-file").val()){		
				$(".news-frmvalue-image-message").text("*Image is required").show();
				isValid = true;
				//return false;				
			}		
			else {
				$(".news-frmvalue-image-message").hide();
			}
      
	  
	  
	  		if(isValid==true){
				return false;
			}
	});
	
	
		
		$("#firstname").blur(function(){
		console.log("1st name");
		if(!$("#firstname").val()){		
				$(".advisory-add-header-message").text("*Advisory header is required").show();
				
				//isValid = true;
				return false;				
			}		
			else {
				$(".advisory-add-header-message").hide();
			}
		});
		
		$("#firstname").keypress(function(){	
		//var	name = '';		
		var header = $("#firstname").val();		
		if(header != ""){		
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
	
	
	$("#firstname").keypress(function(){	
		//var	name = '';		
		var header = $("#firstname").val();		
		if(header != ""){		
			if(header.length == 30){
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
		if(!$("#firstname").val()){		
				$(".advisory-edit-header-message").text("*Advisory header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".advisory-edit-header-message").hide();
			}
		});

		
		
		$("#firstname").blur(function()  {
			if(!$("#firstname").val()){		
				$(".news-add-header-message").text("*News & Events header is required").show();				
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
			}	
	  		
		});	
		
		$("#firstname").keypress(function(){	
		//var	name = '';		
		var header = $("#firstname").val();		
		if(header != ""){		
			if(header.length == 30){
				console.log("header.length :"+header.length);			
				$(".news-add-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".news-add-header-message").hide();
			}
		}		
	});	
		
		
		
		$("#news-save-header").click(function()  { 
	
			// var isValid = false;
			if(!$("#firstname").val()){		
				$(".news-add-header-message").text("*News & Events header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
			}
		
	  		//if(isValid==true){
			//	return false;
			//}
		});	 
		
		$("#firstname").blur(function(){
		if(!$("#firstname").val()){		
				$(".news-edit-header-message").text("*News & Events header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".news-edit-header-message").hide();
			}
		});
	
		$("#firstname").keypress(function(){	
			header = $("#firstname").val();		
			if(header != ""){		
				if(header.length == 30){
				console.log("header.length :"+header.length);			
				$(".news-edit-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".news-edit-header-message").hide();
			}
		}		
	});	

		

		
		$("#advisory-edit-header").click(function() {	
			if(!$("#firstname").val()){		
				$(".advisory-edit-header-message").text("*Advisory header is required").show();			
				return false;				
			}		
			else {
				$(".advisory-edit-header-message").hide();
			}	  		
		});

		
		$("#news-edit-header").click(function()  {	
			if(!$("#firstname").val()){		
				$(".news-edit-header-message").text("*News & Events header is required").show();			
				return false;				
			}		
			else {
				$(".news-edit-header-message").hide();
			}	  		
		});			
	
	
	
	
	    
		
		
	
	
});