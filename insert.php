<?PHP
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
 //This code runs if the form has been submitted
 
session_start();
	$_SESSION['name'] = '';
	$_SESSION['gender'] = '';
	$_SESSION['training'] = '';
	$_SESSION['branch'] = '';
	$_SESSION['year'] = '';
	$_SESSION['marks'] = '';
	$_SESSION['university'] = ''; 
	$_SESSION['dob'] = '';
	$_SESSION['address'] = ''; 
	$_SESSION['email'] = '';
	$_SESSION['mobile'] = '';
	$_SESSION['resume'] = '';
	$_SESSION['captcha'] = '';
 
 
		$name = $_POST['name'];
		$gender = $_POST['gender'];
		$training = $_POST['training'];
		$branch = $_POST['branch'];
		$year = $_POST['academicyear'];
		$marks = $_POST['marks'];
		$university = $_POST['university'];
		$dob = $_POST['dob'];
		$address = $_POST['address'];
		$email = $_POST['email'];
		$mobile = $_POST['mobile'];	

		$_SESSION['name'] = $name;
		$_SESSION['gender'] = $gender;
		$_SESSION['training'] = $training;
		$_SESSION['branch'] = $branch;
		$_SESSION['year'] = $year;
		$_SESSION['marks'] = $marks;
		$_SESSION['university'] = $university;
		$_SESSION['dob'] = $dob;
		$_SESSION['address'] = $address;
		$_SESSION['email'] = $email;
		$_SESSION['mobile'] = $mobile;
		$_SESSION['resume'] = $_POST['resume'];		
		
 		$result =  mysql_query("SELECT * FROM studentdetails WHERE name = '$name' AND
																		gender = '$gender' AND
																		training = '$training' AND
																		branch= '$branch' AND
																		academicYear = '$year' AND
																		marks = '$marks' AND
																		university = '$university' AND
																		dob = '$dob' AND
																		address = '$address' AND
																		email = '$email' AND
																		mobile ='$mobile'",$db_con)					
					or die(mysql_error());
					$num_rows = mysql_num_rows($result);
					if($num_rows!=0){
					echo 'RECORDS EXIST';
					return false;
					}					
					elseif($num_rows==0){
					$email = $_POST['email']; 		
	
					$results =  mysql_query("SELECT name FROM studentdetails WHERE email = '$email' AND 
																		   training = 'i' AND 
																		   training = 'p' AND 
																		   training = 'r'",$db_con) 
					    or die(mysql_error());										
						$number_rows = mysql_num_rows($results);
						if($number_rows!=0){						
						echo 'Your Registration entry limits has exceeded, Registration closed'; 
						return false;
						}
						
					else{
					//$number = $_POST['mobile'];
					//$code= '+91'.$mobile;
					//echo $code;
					echo 'REGISTERING..';
					$insert = "INSERT INTO studentdetails (name, gender, training, branch, academicYear, 
								marks, university, dob, address, email, mobile, resume, registrationDate, status)
								VALUES ('".$_POST['name']."', '".$_POST['gender']."', '".$_POST['training']."',
								'".$_POST['branch']."','".$_POST['academicyear']."','".$_POST['marks']."',
								'".$_POST['university']."', '".$_POST['dob']."', '".$_POST['address']."',
								'".$_POST['email']."',  '+91".$_POST['mobile']."', '".$_POST['resume']."', now(), 'pending')";
								$add_member = mysql_query($insert);
								$toaddress = $_POST['email'];
								$name = $_POST['name'];
								SendUserConfirmationEmail($toaddress, $name);
								
								echo $q;
								echo "<script>			
										window.location.href='success.html';
									  </script>";
									return false;
					}
}			
				
function SendUserConfirmationEmail($toaddress, $name){
require_once 'PHPMailerAutoload.php'; 
$mail = new PHPMailer; 
$mail->isSMTP();                                         // Set mailer to use SMTP
///$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->Host = 'mail.guruits.com';                        // Specify main and backup server
$mail->SMTPAuth = true;                                  // Enable SMTP authentication
$mail->Username = 'chanthinibegam.thajudeen@guruits.com';                   // SMTP username
$mail->Password = 'welcome123';               // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS
///$mail->setFrom('amit@gmail.com', 'Amit Agarwal');     //Set who the message is to be sent from
$mail->setFrom('chanthinibegam.thajudeen@guruits.com');     //Set who the message is to be sent from
///$mail->addReplyTo('labnol@gmail.com', 'First Last');  //Set an alternative reply-to address
///$mail->addAddress('josh@example.net', 'Josh Adams');  // Add a recipient
///$mail->addAddress('ellen@example.com');               // Name is optional

$mail->addReplyTo('chanthinibegam.thajudeen@guruits.com', 'First Last');  //Set an alternative reply-to address
///$mail->addAddress('chanth29@gmail.com', 'chanthini');  // Add a recipient
$mail->addAddress($toaddress, $name);  // Add a recipient
///$mail->addAddress('chanth');               // Name is optional
///$mail->addCC('cc@example.com');
///$mail->addBCC('bcc@example.com');
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
///$mail->addAttachment('/usr/labnol/file.doc');         // Add attachments
///$mail->addAttachment('/images/image.jpg', 'new.jpg'); // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
 
///$mail->Subject = 'Here is the subject';
///$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
///$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

$mail->Subject = 'Registration Confirmation';
$mail->Body    = "THANK YOU. REGISTRATION COMPLETED AND YOUR DETAILS ARE SAVED WITH US.
                  Please click the verification link to verify your registered email address.				  
				  <b><a href=\"http://localhost:8083/events/mail_send_infoguruits.php\">CLICK HERE</a>                                    
				  
				  
				  
				  
				  
				  </b>";
///$mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; 
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
///$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
 
if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
} 
///echo 'Message has been sent';
}


?>  