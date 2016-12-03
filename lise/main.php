<?php

define('__DBHOST__',"localhost");
define('__DBNAME__',"lise");
define('__DBUSER__',"toor");
define('__DBPASS__',"root");

class main_db
{
	public static $db;
	public function __construct()
	{
		try
		{
			$this->db = new PDO('mysql:host='.__DBHOST__.';dbname='.__DBNAME__
			,__DBUSER__,__DBPASS__);
		}
		catch(PDOException $e)
		{
			die('Connection Error');
		}
	}
	function dbdo($query, $params=array())
	{
		try
		{
			$stmt = $this->db->prepare($query);
			if(!$stmt->execute($params))
				die('Oops!');
			
		}
		catch(PDOException $e)
		{
			die('SERVER ERROR');
			//return $e->getMessage();
		}
		return $stmt;
	}
}

?>
