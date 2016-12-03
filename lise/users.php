<?php
session_start();
include_once './main.php';

class user
{
	public function signin()
	{
		if(!isset($_POST['username']) OR !isset($_POST['password']))
		{
			return false;
		}
		$user = strtolower($_POST['username']);
		$pass = $_POST['password'];
		//validate
		if($user == NULL or preg_match('/[^a-z0-9_\-]/',$user))
		{
			return false;
		}
		if($pass==NULL)
		{
			return false;
		}
		
		$sql = "SELECT * FROM users WHERE username = ?";
		$db = new main_db();
		$stmt = $db->dbdo($sql,array($user));
		$res = $stmt->fetch();
		
		if($res==NULL)
		{
			return false;
		}
		
		$p = hash('sha512',$pass.$res['salt']);
		if($p == $res['password'])
		{
			//set session
			$_SESSION['uid']=$res['uid'];
			$_SESSION['name']=$res['name'];
			$_SESSION['username']=$res['username'];
			return true;
		}
		else
		{
			return false;
		}
	}
}

$reply = array();
$u = new user();
$reply['state']=$u->signin();
if(!$reply['state'])
{
	$_SESSION['error']=true;
	header('location:./');
	exit;
}
else
{
	if(isset($_SESSION['error']))
	{
		unset($_SESSION['error']);
	}
	header('location:./home.php');
	exit;
}

?>
