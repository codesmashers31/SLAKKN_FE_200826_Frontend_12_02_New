CREATE DATABASE normal_db;

use normal_db;


CREATE table student_course_1nf (

sdu_id int AUTO_INCREMENT,
studentname VARCHAR(20),
course VARCHAR(30),
skills VARCHAR(20),

PRIMARY key (sdu_id,course,skills)

);


insert into student_course_1nf values (1,"Arun","Java","HTML"),(1,"Arun","Java","CSS"),(1,"Arun","Java","JS"),(1,"Arun","Java","Node");

select * from student_course_1nf;




CREATE table studenttable_2nf (

sdu_id int AUTO_INCREMENT,
studentname VARCHAR(20),
skills VARCHAR(20),

PRIMARY key (sdu_id,skills)

);

insert into studenttable_2nf values (1,"Arun","HTML"),(1,"Arun","JS"),(2,"Rube","CSS");

select * from studenttable_2nf;

CREATE table trainer (

t_id int  AUTO_INCREMENT,
tname VARCHAR(20),
skills VARCHAR(20),

PRIMARY key(t_id,skills)


);

insert into trainer values (1,"Mugund","MERN"),(2,"Venkat","Java"),(3,"Arun","AWS");

select * from trainer;


CREATE table coursetable (

c_id int PRIMARY key  AUTO_INCREMENT,
cname VARCHAR(20),
cfees VARCHAR(20)

);
insert into coursetable values (1,"MERN","30000"),(2,"Java","40000"),(3,"AWS","50000");

select * from coursetable;

select * from entrollment;


insert into entrollment values (1,1,2,2);



select * from entrollment as e inner join studenttable_2nf as stu INNER join coursetable as c INNER join  trainer as t on e.c_id = c.c_id and e.t_id = t.t_id;


CREATE table entrollment (

eid int  AUTO_INCREMENT,
sdu_id int,
c_id int,
t_id int,
PRIMARY key (eid,sdu_id,c_id,t_id),


foreign key (sdu_id) REFERENCES studenttable_2nf (sdu_id),
foreign key (c_id) REFERENCES coursetable (c_id),
foreign key (t_id) REFERENCES trainer (t_id)

);





pasients 
staffs
dessis
depaetment
payment






