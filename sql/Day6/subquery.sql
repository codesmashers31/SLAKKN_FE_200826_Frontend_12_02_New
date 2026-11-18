CREATE DATABASE subquery_db;

USE subquery_db;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    city VARCHAR(50)
);

start TRANSACTION;

update employees set salary = salary - 30000 where emp_id = 1;


ROLLBACK;
select * from employees;

INSERT INTO employees VALUES
(1, 'Arun', 'IT', 50000, 'Chennai'),
(2, 'Priya', 'HR', 30000, 'Madurai'),
(3, 'Kavin', 'IT', 60000, 'Chennai'),
(4, 'Divya', 'Finance', 40000, 'Trichy'),
(5, 'Rahul', 'HR', 35000, 'Salem'),
(6, 'Sneha', 'IT', 70000, 'Chennai'),
(7, 'Vijay', 'Finance', 45000, 'Madurai'),
(8, 'Meena', 'HR', 25000, 'Trichy');


SELECT * FROM employees;



-- Find employees earning more than Arun.

select salary from employees where emp_name = "Arun";

select * from employees where salary > (select salary from employees where emp_name = "Arun");


select max(salary) from employees < select max(salary) from employees;

select * from employees where salary = (select max(salary) from employees);

select * from employees where salary = (select max(salary) from employees where salary < (select max(salary) from employees where salary < (select max(salary) from employees)));

select department,max(salary) from employees GROUP by department; 

select max(salary) from employees where department = e.department;

select * from employees as e where salary > (select AVG(salary) from employees where department = e.department);


select * from employees  where salary > (select avg(salary) from employees where department = "IT");


select department , avg(salary) as avg_salary from employees GROUP by department HAVING AVG(salary) > 40000;

SET@N = 3;

select DISTINCT salary from employees ORDER BY salary DESC LIMIT 1 OFFSET 4;

select emp_name from employees where LOWER(emp_name) = LOWER(reverse(emp_name));


-- GRANT PRIVILEGE_CHECKS_USER on databasename.tablename to 'root@localhost';

REVOKE select,insert,update on subquery_db.employees from 'root@localhost';


START TRANSACTION;

update employees set salary = salary + 20000 where emp_id = 1;

SAVEPOINT point1;

update employees set salary = salary + 20000 where emp_id = 2;

SAVEPOINT point2;

update employees set salary = salary + 20000 where emp_id = 3;

SAVEPOINT point3;

ROLLBACK to SAVEPOINT point2;

COMMIT;

select * from employees;