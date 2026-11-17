create DATABASE sladb;

use sladb;


CREATE table departments (

  departid int primary key AUTO_INCREMENT,
  departname VARCHAR(20),
  status BOOLEAN DEFAULT TRUE


);

insert into departments (departname) values ("Mern"),("Java"),("Python"),("CCNA"),("DOTNET");

select * from departments;


CREATE table stutable (
stuid int PRIMARY key AUTO_INCREMENT,
stuname VARCHAR(30),
did int,
stuemail VARCHAR(20),
status BOOLEAN DEFAULT true,

FOREIGN KEY (did) REFERENCES departments (departid)


);

drop table stutable;




insert into stutable (stuname,did,stuemail) values ("Arun",1,"arun@gmail.com"),("Kumar",3,"kumar@gmail.com"),("Dinesh",4,"dinesh@gmail.com"),("Dhoni",1,"dhoni@gmail.com"),("Vetri",5,"vetri@gmail.com");

select * from stutable;



select * from stutable as s INNER JOIN departments as d on s.did = d.departid;


select * from stutable as s LEFT JOIN departments as d on s.did = d.departid;

select * from stutable as s right JOIN departments as d on s.did = d.departid;

create table course(
course_id int primary key auto_increment,
course_name varchar(20),
fees int default 40000,
status boolean default true,
created_by varchar(20) default "admin",
created_at timestamp default current_timestamp,
updated_by varchar(20),
updated_at timestamp default current_timestamp
);


create table trainner(
t_id int primary key auto_increment,
t_name varchar (20)


);

create table student(
stu_id int primary key auto_increment,
stu_name varchar(20),

joined_date date

);

create table eid(
eid int primary key auto_increment,
stu_id int,
course_id int,
t_id int,
foreign key (stu_id) references student(stu_id),
foreign key (course_id) references course(course_id),
foreign key (t_id) references trainner(t_id)
);

-- 1. Insert courses
-- status, created_by, and timestamps use their default values.
INSERT INTO course (course_name, fees)
VALUES
('Java', 40000),
('Python', 35000),
('Web Development', 45000),
('Data Science', 50000),
('SQL', 25000);

-- 2. Insert trainers
INSERT INTO trainner (t_name)
VALUES
('Arun'),
('Priya'),
('Kumar'),
('Divya'),
('Bala');

-- 3. Insert students
INSERT INTO student (stu_name, joined_date)
VALUES
('Rahul', '2026-11-01'),
('Anitha', '2026-11-02'),
('Vijay', '2026-11-03'),
('Meena', '2026-11-04'),
('Karthik', '2026-11-05');

-- 4. Insert enrollments
-- Each row connects an existing student, course, and trainer.
INSERT INTO eid (stu_id, course_id, t_id)
VALUES
(1, 1, 1), -- Rahul   → Java            → Arun
(2, 2, 2), -- Anitha  → Python          → Priya
(3, 3, 3), -- Vijay   → Web Development → Kumar
(4, 4, 4), -- Meena   → Data Science    → Divya
(5, 5, 5), -- Karthik → SQL             → Bala
(1, 5, 5), -- Rahul   → SQL             → Bala
(2, 4, 4); -- Anitha  → Data Science    → Divya




-- View all courses
SELECT * FROM course;

-- View all trainers
SELECT * FROM trainner;

-- View all students
SELECT * FROM student;

-- View all enrollments
SELECT * FROM eid;


select * from student as s inner join eid as e on s.stu_id = e.stu_id inner join trainner as t on t.t_id = e.t_id inner join course as c on c.course_id = e.course_id;




