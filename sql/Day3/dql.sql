create  database college_db;

use college_db;

CREATE TABLE department (
     department_id INT PRIMARY KEY AUTO_INCREMENT,
     department_name VARCHAR(100) NOT NULL,
     department_category VARCHAR(50),
     department_count INT,
     status boolean default true
);


insert into department (department_name,department_category,department_count) values("MERN","FS",15);
insert into department (department_name,department_category,department_count) values("Java","BS",5);
insert into department (department_name,department_category,department_count) values("Python","FS",50);
insert into department (department_name,department_category,department_count) values("Dotnet","Bs",405);

insert into department (department_name,department_category,department_count) values(upper("Dotnet"),lower("Bs"),405);
select * from department;

select upper(department_name),department_category from department;


select * from department where department_name = "java";


select distinct department_category,status from department;


select department_category as "Department of the Category" from department;


select department_name as "Name" from department where department_count > 10;

select * from department where department_count BETWEEN 10 and 30;

select * from department where department_name not in ("it");

select * from department where department_name like "_a%";
  
select * from department where department_name like "a%";


select * from department where department_name is null;


select * from department  where department_count BETWEEN 1 and 30 order by department_count desc limit 5;


select * from department;


-- select avg(department_count),department_name as Total_sum from department group by department_name;

-- select columnname,aggregate_function(coulumnname) from tablename group by columnname 





