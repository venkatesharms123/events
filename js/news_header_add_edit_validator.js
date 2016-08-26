$(document).ready(function(){

//------------------------------------------------ NEWS & EVENTS ADD HEADER --------------------------------------------------------
		
		$("#firstname").keypress(function(){	
		//var	name = '';		
		var header = $("#firstname").val();		
		if(header != ""){

		var allowedChars = new RegExp("^[A-Za-z &]+$");
		
		if (!allowedChars.test(header)) {
			$(".news-add-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
			}
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
	
	
	$("#firstname").blur(function(){
		console.log("1st name");
		if(!$("#firstname").val()){		
				$(".news-add-header-message").text("*News & Events header is required").show();				
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
			}
			
		var allowedChars = new RegExp("^[A-Za-z &]+$");		
		if (!allowedChars.test($("#firstname").val())) {
			$(".news-add-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
			}	
			
		});
		
	
	$("#news-save-header").click(function()  {	
			// var isValid = false;
			check();
			if(!$("#firstname").val()){		
				$(".news-add-header-message").text("*News & Events header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
				
				insertnewsheader();
			}
			
function check(){			
		var header = $("#firstname").val();		
		if(header != ""){

		var allowedChars = new RegExp("^[A-Za-z &]+$");
		
		if (!allowedChars.test(header)) {
			$(".news-add-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".news-add-header-message").hide();
			}
		}
}

function insertnewsheader() {
$.ajax({
		url: "insert_news_header.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		console.log(" file data : " +data);
		
		
		//jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add-form-respond highlight">'+data+'</span>');
		$(".advisory-add-header-message").text(data).show();
		window.location = 'news_view_headers.html';
		},
	error: function(){
		jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="advisory-add--form-respond highlight">ERROR.</span>');
	}
	
});

}		
	  		
			
		});	 
	
//------------------------------------------------ NEWS & EVENTS EDIT HEADER --------------------------------------------------------


		$("#firstname").keypress(function(){	
		//var	name = '';		
		var editHeader = $("#firstname").val();		
		if(editHeader != ""){

		var allowedChars = new RegExp("^[A-Za-z &]+$");
		
		if (!allowedChars.test(editHeader)) {
			$(".news-edit-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".news-edit-header-message").hide();
			}
			if(editHeader.length == 30){
				console.log("header.length :"+header.length);			
				$(".news-edit-header-message").text("Maximum character value reached").show();
				return false;			
			}					
			else {
				$(".news-edit-header-message").hide();
			}
		}		
	});	
	
	
	$("#firstname").blur(function(){
		console.log("1st name");
		if(!$("#firstname").val()){		
				$(".news-edit-header-message").text("*News & Events header is required").show();				
				//isValid = true;
				return false;				
			}		
			else {
				$(".news-edit-header-message").hide();
			}
			
		var allowedChars = new RegExp("^[A-Za-z &]+$");		
		if (!allowedChars.test($("#firstname").val())) {
			$(".news-edit-header-message").text("*character value only required").show();			
				return false;				
			}		
			else {
				$(".news-edit-header-message").hide();
			}	
		});
		
	
	$("#news-edit-header").click(function()  { 	
			// var isValid = false;
			if(!$("#firstname").val()){		
				$(".news-edit-header-message").text("*News & Events header is required").show();
				//isValid = true;
				return false;				
			}		
			else {
				$(".news-edit-header-message").hide();
			}
		
	  		//if(isValid==true){
			//	return false;
			//}
		});	 
		
	
	
	
});