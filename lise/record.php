<?php
	session_start();
	if(!isset($_POST['lise']) OR !isset($_SESSION['uid']))
	{
		die();
	}
	
	include_once './main.php';
	
	date_default_timezone_set('Asia/Kolkata');
	$date = date('Y-m-d h:i:s', time());
	$db = new main_db();
	$input = array();
	$input = $_POST['lise'];
	array_push($input,$_SESSION['uid'],$date);
	if($_POST['type']=='person')
	{
		$sql = "INSERT INTO people(function,name,designation,company,
		location,pub_addr,email,phone,industry,org_type,pg_title,pg_url,
		last_modified,uid,uTime)  
		VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		$result = $db->dbdo($sql,$input);
	}
	else if($_POST['type']=='company')
	{
		$sql = "INSERT INTO companies(name,specialities,website,industry,
		hq,employeeCount,founded,summary,pg_title,pg_url,last_modified,
		uid,uTime) 
		VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		$result = $db->dbdo($sql,$input);
	}
	echo json_encode($result);

?>
