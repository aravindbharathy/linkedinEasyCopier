<!DOCTYPE html>
<?php
session_start();
if(isset($_SESSION['uid']))
{
	header('location:home.php');
	exit;
}
?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="./bootstrap/docs-assets/ico/favicon.png">

    <title>TheElitists - Signin</title>

    <!-- Bootstrap core CSS -->
    <link href="./bootstrap/dist/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="signin.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../docs-assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container" style="margin-top:10%">

      <form class="form-signin" method="post" action="users.php">
        <center>
        <h2 class="form-signin-heading">ExecSphere</h2><br>
        </center>
        <input name="username" type="text" class="form-control" placeholder="Username" required autofocus>
        <input name="password" type="password" class="form-control" placeholder="Password" required><br>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
<?php
if(isset($_SESSION['error']))
{
	echo '<br><div class="alert alert-danger" style="text-align:center"> Invalid username or password </div>';
}
?>
      </form>

    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
  </body>
</html>