-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 20, 2014 at 06:53 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lise`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `specialties` varchar(500) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `hq` varchar(300) DEFAULT NULL,
  `employeeCount` varchar(50) DEFAULT NULL,
  `founded` varchar(50) DEFAULT NULL,
  `summary` varchar(500) DEFAULT NULL,
  `pg_title` varchar(200) DEFAULT NULL,
  `pg_url` varchar(200) DEFAULT NULL,
  `last_modified` varchar(50) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `uTime` datetime DEFAULT NULL,
  PRIMARY KEY (`cid`),
  UNIQUE KEY `new_index_1` (`website`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE IF NOT EXISTS `people` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `function` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `designation` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `pub_addr` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `industry` varchar(50) DEFAULT NULL,
  `org_type` varchar(50) DEFAULT NULL,
  `pg_title` varchar(50) DEFAULT NULL,
  `pg_url` varchar(50) DEFAULT NULL,
  `last_modified` varchar(20) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `uTime` datetime DEFAULT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `new_index_1` (`pg_url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` char(128) DEFAULT NULL,
  `salt` char(128) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `new_index_1` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `name`, `username`, `password`, `salt`) VALUES
(1, 'account1', 'account1', 'e8e9298930d56db313fa3b5b3d72f265ac24d4930ec3c2e91f3f2c3db4d79d18ee57f59e44472541c39aff77ab2f7d2d52a33a6742484d6a8e3f9b8f18ad60f9', 'f5a18b71d5b8c0c80cf4c9689fdf8a88ae28e8592333b3232c0ab95eb577eecf5b4075f69c22d8c441a70cb8218fef8d99db49fa345b736877ffde3b8c86ed6a'),
(2, 'account2', 'account2', 'e8e9298930d56db313fa3b5b3d72f265ac24d4930ec3c2e91f3f2c3db4d79d18ee57f59e44472541c39aff77ab2f7d2d52a33a6742484d6a8e3f9b8f18ad60f9', 'f5a18b71d5b8c0c80cf4c9689fdf8a88ae28e8592333b3232c0ab95eb577eecf5b4075f69c22d8c441a70cb8218fef8d99db49fa345b736877ffde3b8c86ed6a'),
(3, 'account3', 'account3', 'e8e9298930d56db313fa3b5b3d72f265ac24d4930ec3c2e91f3f2c3db4d79d18ee57f59e44472541c39aff77ab2f7d2d52a33a6742484d6a8e3f9b8f18ad60f9', 'f5a18b71d5b8c0c80cf4c9689fdf8a88ae28e8592333b3232c0ab95eb577eecf5b4075f69c22d8c441a70cb8218fef8d99db49fa345b736877ffde3b8c86ed6a'),
(4, 'account4', 'account4', 'e8e9298930d56db313fa3b5b3d72f265ac24d4930ec3c2e91f3f2c3db4d79d18ee57f59e44472541c39aff77ab2f7d2d52a33a6742484d6a8e3f9b8f18ad60f9', 'f5a18b71d5b8c0c80cf4c9689fdf8a88ae28e8592333b3232c0ab95eb577eecf5b4075f69c22d8c441a70cb8218fef8d99db49fa345b736877ffde3b8c86ed6a'),
(5, 'account5', 'account5', 'e8e9298930d56db313fa3b5b3d72f265ac24d4930ec3c2e91f3f2c3db4d79d18ee57f59e44472541c39aff77ab2f7d2d52a33a6742484d6a8e3f9b8f18ad60f9', 'f5a18b71d5b8c0c80cf4c9689fdf8a88ae28e8592333b3232c0ab95eb577eecf5b4075f69c22d8c441a70cb8218fef8d99db49fa345b736877ffde3b8c86ed6a');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
