
 <?php 
 
session_start(); 
		//$toaddress = 'info@guruits.com';
		$toaddress = 'chanth29@gmail.com';
		$name = 'chanthini';
		SendUserConfirmationEmail($toaddress, $name);		
			
		
function SendUserConfirmationEmail($toaddress, $name){
require_once 'PHPMailerAutoload.php'; 

	$n='';
	$g='';
	$t='';
	$b='';
	$y='';
	$ma='';
	$u='';
	$d='';
	$a='';
	$e='';
	$mo='';

if($_SESSION['gender']=='m'){
	$g = 'male';
}
else {
	$g = 'female';
}


if($_SESSION['training']=='i'){
	$t = 'Internship';
}
else if($_SESSION['training']=='a'){
	$t = 'Academic project';
}
else {
	$t = 'Ready to deploy programme';
}

	 $n = "NAME	:" . $_SESSION['name'] . "<br>";
	 $g = "GENDER	:" . $g . "<br>";
	 $t = "TRAINING TYPE	:" . $t . "<br>";
	 $b = "BRANCH	:" . $_SESSION['branch'] . "<br>";
	 $y = "BATCH	:" . $_SESSION['year'] . "<br>";
	 $ma = "MARKS IN %	:" . $_SESSION['marks'] . "<br>";
	 $u = "UNIVERSITY	:" . $_SESSION['university'] . "<br>";
	 $d = "DOB	:" . $_SESSION['dob'] . "<br>";
	 $a = "ADDRESS	:" . $_SESSION['address'] . "<br>";
	 $e = "EMAIL	:" . $_SESSION['email'] . "<br>";
	 $mo = "MOBILE:" .'+91'. $_SESSION['mobile'] . "<br>";
	//$r = "RESUME	:" . $_SESSION['resume'] . "<br>";
	//echo $n . " " . $g . " " . $t . " " . $b . " " . $y . " " . $ma . " " . $u . " " . $d . " " . $a . " " . $e . " " . $mo;	

		// PHP variable to store the host address
		$db_host  = "localhost";
		// PHP variable to store the username
		$db_uid  = "root";
		// PHP variable to store the password
		$db_pass = "";
		// PHP variable to store the Database name  
		$db_name  = "registration"; 
			$db_con = mysql_connect($db_host,$db_uid,$db_pass) or die('could not connect');
			mysql_select_db("registration",$db_con);			 
			$sql = "UPDATE studentdetails SET status='Registered' WHERE name='".$_SESSION['name']."' 
					OR email='".$_SESSION['email']."' 
					OR training='".$_SESSION['training']."'  ";
			$retval = mysql_query( $sql, $db_con );
			if(! $retval ) {
				die('Could not update data: ' . mysql_error());
			}
			else{
				//echo "Updated data successfully\n";
			}
	
$mail = new PHPMailer; 
$mail->isSMTP();                                         	   // Set mailer to use SMTP
///$mail->Host = 'smtp.gmail.com';                       	   // Specify main and backup server
$mail->Host = 'mail.guruits.com';                       	   // Specify main and backup server
$mail->SMTPAuth = true;                                  	   // Enable SMTP authentication
$mail->Username = 'chanthinibegam.thajudeen@guruits.com';      // SMTP username
$mail->Password = 'welcome123';               			       // SMTP password
$mail->SMTPSecure = 'tls';                                     // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                              //Set the SMTP port number - 587 for authenticated TLS
///$mail->setFrom('amit@gmail.com', 'Amit Agarwal');            //Set who the message is to be sent from
$mail->setFrom('chanthinibegam.thajudeen@guruits.com');         //Set who the message is to be sent from
///$mail->addReplyTo('labnol@gmail.com', 'First Last');  		//Set an alternative reply-to address
///$mail->addAddress('josh@example.net', 'Josh Adams'); 	   // Add a recipient
///$mail->addAddress('ellen@example.com');                     // Name is optional
$mail->addReplyTo('chanthinibegam.thajudeen@guruits.com', 'First Last');  //Set an alternative reply-to address
///$mail->addAddress('chanth29@gmail.com', 'chanthini');       // Add a recipient
$mail->addAddress($toaddress, $name);                          // Add a recipient
///$mail->addAddress('chanth');                                // Name is optional
///$mail->addCC('cc@example.com');
///$mail->addBCC('bcc@example.com');
$mail->WordWrap = 50;                                         // Set word wrap to 50 characters
///$mail->addAttachment('/usr/labnol/file.doc');              // Add attachments
///$mail->addAttachment('/images/image.jpg', 'new.jpg');      // Optional name
$mail->isHTML(true);                                          // Set email format to HTML 
///$mail->Subject = 'Here is the subject';
///$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
///$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
$mail->Subject = 'Registered student details of Training';
$mail->Body    =  $n . " " . $g . " " . $t . " " . $b . " " . $y . " " . $ma . " " . $u . " " . $d . " " . $a . " " . $e . " " . $mo;						
///$mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; 
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
///$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

		echo "<script>			
				window.location.href='verified.html';
		    </script>";
			
if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
	} 
}
 
 ?>