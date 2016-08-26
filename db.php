<span class="comments">// create a database </span> 
CREATE DATABASE student
USE student
 
<span class="comments">// create a table studentdetails  </span> 
CREATE TABLE IF NOT EXISTS studentdetails 
(
  id int(11) NOT NULL AUTO_INCREMENT,
  name char(50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  mobile bigint(20) NOT NULL,
  gender enum('m','f') NOT NULL,
  hobbies varchar(100) NOT NULL,
  dob date NOT NULL,
  address text NOT NULL,
  profilePic varchar(255) NOT NULL,
  registrationDate datetime NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
) 

CREATE TABLE IF NOT EXISTS studentdetails 
(
  id int(11) NOT NULL AUTO_INCREMENT,
  name char(50) NOT NULL,
  email varchar(50) NOT NULL, 
  gender enum('m','f') NOT NULL,
  Training enum('i','p') NOT NULL,
  dob date NOT NULL, 
  collegeName char(50) NOT NULL,
  passedYear int(4) NOT NULL,
  marks int(2) NOT NULL, 
  address text NOT NULL,
  mobile bigint(20) NOT NULL,
  registrationDate datetime NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
) 

-------------- new db---------------------------

CREATE TABLE IF NOT EXISTS studentdetails 
(
  id int(11) NOT NULL AUTO_INCREMENT,
  name char(30) NOT NULL, 
  gender enum('m','f') NOT NULL,
  training enum('i','p','r') NOT NULL,
  branch varchar(20) NOT NULL, 
  academicYear int(20) NOT NULL,
  marks double(4,2) NOT NULL, 
  university varchar(20)  NOT NULL, 
  dob date NOT NULL,  
  address text NOT NULL,
  email varchar(30) NOT NULL, 
  mobile bigint(20) NOT NULL,
  resume varchar(900) NOT NULL,
  registrationDate datetime NOT NULL,
  PRIMARY KEY (id)  
) 

--------- final db------------

CREATE TABLE IF NOT EXISTS studentdetails 
(
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL, 
  gender enum('m','f') NOT NULL,
  training enum('i','p','r') NOT NULL,
  branch varchar(30) NOT NULL, 
  academicYear int(4) NOT NULL,
  marks double(4,2) NOT NULL, 
  university varchar(30)  NOT NULL, 
  dob date NOT NULL,  
  address varchar(50) NOT NULL,
  email varchar(30) NOT NULL, 
  mobile bigint(10) NOT NULL,
  resume varchar(900) NOT NULL,
  registrationDate datetime NOT NULL,
  status varchar(12),
  PRIMARY KEY (id)  
) 










