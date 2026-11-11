create database sqldb;

use sqldb;

-- SET SQL_SAFE_UPDATES = 1;

create table usertable (

userid int primary key auto_increment,

username varchar(20),

usermobile varchar(20),

userdepartment varchar(20),

createdby varchar(30) default "Admin",

createdat timestamp default current_timestamp,

updateby varchar(30),
updatedat timestamp default current_timestamp,

status boolean default TRUE


);


alter table usertable add useremail varchar(20);

alter table usertable add userage int after usermobile;

alter table usertable modify userage varchar(20);

alter table usertable modify userage int;


alter table usertable change userdepartment department varchar(20);


alter table usertable rename column department to userdepartment;


alter table usertable add constraint unique(useremail);

alter table usertable drop column useremail;

rename table usertable to usertableone;


rename table  usertableone to usertable;


-- create table backuptable as select * from usertable;





-- DML 
-- Syntex 
-- insert into tablename (colum names saparated by ,) values (datas saparated by ,);


insert into usertable (username,usermobile,userage,userdepartment,updateby) values ("React","6463736272",20,"IT","User"),("React","6463736272",20,"IT","User"),("React","6463736272",20,"IT","User");


-- update tablename set columnname = newdata where condition; 

update usertable set username = "MongoDb",userage = 45 where userid = 2;



-- delete from tablename where condition;

delete from usertable where userid=2;



drop database newdb;

drop table backuptable;

truncate table usertable;




