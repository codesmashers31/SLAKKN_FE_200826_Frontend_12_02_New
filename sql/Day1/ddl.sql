-- DDL 
-- Create, alter, rename, change, modify, truncate, drop
-- ; - delimiter

create database slanewdb;

use slanewdb;

-- create table students (

-- -- columnName datatype constraints(not null,null,check,unique,primary key, foreign key
-- default, auto_increment),

-- );

-- columnname create 

-- id int
-- bigint
-- name char(10), varchar(300), text - large text - ENUM Predefinde value 
-- mobilenumber
-- email
-- password
-- age
-- course
-- coursedur
-- createdby
-- createdat
-- updatedby
-- updatedat
-- Date(yyyy-mm-dd), time(hh:mm:ss) , datetime(yyyy-mm-dd hh:mm:ss), timestamp(yyyy-mm-dd hh:mm:ss), year(yyyy)
-- status boolean(1,0)

create table stutable (

id int primary key auto_increment,
studentname varchar(30) not null,
studentage int check(studentage>=18),
gender varchar(30),
course varchar(30) default "Tech",
email varchar(40) unique,
admissiondate datetime,
createby varchar(30) default "admin",
createdat timestamp default current_timestamp,
isActive boolean default true

);
