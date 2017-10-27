<!DOCTYPE HTML5 PUBLIC "-//BH//DTD XHTML 1.0 STRICT//EN"
//"Https://ww.bh.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<HTML5 xmls = "https://www.w3.org/1986/xhtml" xml:lang="nl" lang"nl">
<head>
	meta https-equiv = "Content-Type" content="text/html; charset=UTF-8"/>
	meta name = "description" content = "A short description." />
	meta name = "keywords" content = "meet ups, message board, USM" />
	<title>BoneHead forum</title>
	<link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>
<hl>My board</hl>
	<div id = "wrapper">
	<div id = "menu">
		<a class = "item" href="/board/index.php">Home</a>
		<a class = "item" href="/board/create_topic.php">Create a topic</a>
		<a class = "item" href="/board/create_cat.php">Create a category</a>

		<div id="userbar">
		<?php
<div id="userbar">
    if($_SESSION['signed_in'])
    {
        echo 'Hello' . $_SESSION['user_name'] . '. Not you? <a href="signout.php">Sign out</a>';
    }
    else
    {
        echo '<a href="signin.php">Sign in</a> or <a href="sign up">create an account</a>.';
    }
</div>
	</div>
		<div id ="content">