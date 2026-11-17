-- select * from tablename where coumnname opeerator (select * from table_name where condition);

CREATE DATABASE companydb;

use companydb;

-- 1. Create department table
CREATE TABLE department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

-- 2. Create employee table
CREATE TABLE employee (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2),
    dept_id INT,
    manager_id INT,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id),
    FOREIGN KEY (manager_id) REFERENCES employee(emp_id)
);

-- 3. Insert departments
INSERT INTO department (dept_id, dept_name)
VALUES
(1, 'IT'),
(2, 'HR'),
(3, 'Sales'),
(4, 'Finance'),
(5, 'Marketing');

-- 4. Insert managers first
INSERT INTO employee
    (emp_id, emp_name, salary, dept_id, manager_id)
VALUES
(101, 'Arun', 90000, 1, NULL),
(102, 'Priya', 75000, 2, NULL),
(103, 'Kumar', 80000, 3, NULL),
(104, 'Divya', 95000, 4, NULL);

-- 5. Insert other employees
INSERT INTO employee
    (emp_id, emp_name, salary, dept_id, manager_id)
VALUES
(105, 'Bala', 45000, 1, 101),
(106, 'Meena', 60000, 1, 101),
(107, 'Rahul', 40000, 2, 102),
(108, 'Anitha', 50000, 3, 103),
(109, 'Vijay', 55000, 3, 103),
(110, 'Karthik', 65000, 4, 104),
(111, 'Nisha', 60000, 1, 101),
(112, 'Suresh', 35000, NULL, NULL);

-- 6. View all data
-- Create a single employee table without ID columns
CREATE TABLE employeeone (
    emp_name VARCHAR(30),
    department VARCHAR(30),
    designation VARCHAR(30),
    salary DECIMAL(10, 2),
    city VARCHAR(30),
    joining_date DATE
);

-- Insert employee data
INSERT INTO employeeone
    (emp_name, department, designation, salary, city, joining_date)
VALUES
('Arun', 'IT', 'Manager', 90000, 'Chennai', '2020-01-15'),
('Priya', 'HR', 'Manager', 75000, 'Bangalore', '2021-03-10'),
('Kumar', 'Sales', 'Manager', 80000, 'Chennai', '2019-06-20'),
('Divya', 'Finance', 'Manager', 95000, 'Mumbai', '2018-09-05'),
('Bala', 'IT', 'Developer', 45000, 'Chennai', '2023-02-12'),
('Meena', 'IT', 'Developer', 60000, 'Bangalore', '2022-07-18'),
('Rahul', 'HR', 'Recruiter', 40000, 'Hyderabad', '2023-05-22'),
('Anitha', 'Sales', 'Executive', 50000, 'Mumbai', '2022-11-14'),
('Vijay', 'Sales', 'Executive', 55000, 'Chennai', '2021-08-30'),
('Karthik', 'Finance', 'Accountant', 65000, 'Bangalore', '2020-12-01'),
('Nisha', 'IT', 'Tester', 60000, 'Hyderabad', '2022-04-25'),
('Suresh', 'Marketing', 'Executive', 35000, 'Chennai', '2024-01-10'),
('Lakshmi', 'Marketing', 'Manager', 70000, 'Mumbai', '2021-10-08'),
('Deepak', 'Finance', 'Accountant', 50000, 'Hyderabad', '2023-09-15'),
('Geetha', 'HR', 'Recruiter', 45000, 'Bangalore', '2024-06-20');

-- View all employees
SELECT * FROM employeeone;



select * from employeeone where department in ("IT");


select * from employeeone where salary = (select max(salary) from employeeone);


select salary from employeeone where salary > 60000;

select * from employeeone where salary > (select salary from employeeone where salary > 60000);

select min(salary) from employeeone;

select count(salary) from employeeone;

select * from employeeone where salary < (select count(salary) from employeeone);




