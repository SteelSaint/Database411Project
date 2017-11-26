<?php
	include ('layout_manager.php');
	include ('content_function.php');
	addview($_GET['cid'], $_GET['scid'], $_GET['tid']);
?>
<html>
<head><title>NuBoard</title></head>
<link href="stylesheet.css" type="text/css" rel="stylesheet" />
<body>
	<div class="pane">
		<div class="header"><h1><a href="/">NuBoard V.009</a></h1></div>
		<div class="loginpane">
			<?php
				session_start();
				if (isset($_SESSION['username'])) {
					logout();
				} else {
					if (isset($_GET['status'])) {
						if ($_GET['status'] == 'reg_success') {
							echo "<h1 style='color: green;'>new user registered successfully!</h1>";
						} else if ($_GET['status'] == 'login_fail') {
							echo "<h1 style='color: red;'>invalid username and/or password!</h1>";
						}
					}
					loginform();
				}
			?>
		</div>
		<div class="forumdesc">
			<p>A board created by Sarju, Alex, Deluno, and Michael</p>
			<?php
				replylink($_GET['cid'], $_GET['scid'], $_GET['tid']);
			?>
		</div>
		<?php
			disptopic($_GET['cid'], $_GET['scid'], $_GET['tid']);
			echo "<div class='content'><p>All Replies (".countReplies($_GET['cid'], $_GET['scid'], $_GET['tid']).")
				  </p></div>";
			dispreplies($_GET['cid'], $_GET['scid'], $_GET['tid']);
		?>
	</div>
</body>
</html>