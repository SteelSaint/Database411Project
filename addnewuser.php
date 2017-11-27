<?php
	include ('dbconn.php');
	
	$newuser = $_POST['usernameinput'];
	$newpwd = $_POST['passwordinput'];
	$newpwd2 = $_POST['passwordinput2'];

	if($newpwd == $newpwd2){
		$flag = TRUE;
	}
	
	if($flag == TRUE){
	$salted = "fja;lkjKLJLJSKLJKLJkjl9289234ujlkj2lkj".$newpwd."RUSERIOUS?!YOUWANNABATTLEME?!";
	//Short salt, used for everyone, but HEY! Now I will know if someone took my stuff
	$hashed = hash('sha512',$salted);
	//This is of course assuming they can break sha512. ;)

	$insert = mysqli_query($con, "INSERT INTO users (`username`, `password`) VALUES ('$newuser', '$hashed');");
	
	}
	if ($insert == TRUE) {
		header("Location: index.php?status=reg-success");
	} else {
		die("Messed up something, fix it.");
	}
?>