CREATE DATABASE newdbs;

use newdbs;
-- Create employee table
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50),
    Department VARCHAR(50),
    Salary INT,
    Age INT,
    JoiningDate DATE
);

-- Insert employee records
INSERT INTO Employees VALUES
(1, 'MADAM', 'IT', 30000, 25, '2024-01-10'),
(2, 'Arun', 'HR', 25000, 23, '2025-03-15'),
(3, 'NITIN', 'IT', 45000, 28, '2023-05-20'),
(4, 'Vijay', 'Sales', 20000, 22, '2025-07-12'),
(5, 'LEVEL', 'HR', 35000, 26, '2024-08-11'),
(6, 'Surya', 'IT', 50000, 24, '2025-02-18'),
(7, 'Ajith', 'Sales', 28000, 21, '2025-06-10'),
(8, 'Arun', 'HR', 25000, 23, '2025-03-15');

-- Create sales table
CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    Amount DECIMAL(10,2),
    SaleDate DATE
);

INSERT INTO Sales VALUES
(1, 5000, '2026-01-10'),
(2, 7000, '2026-01-15'),
(3, 3000, '2026-02-05'),
(4, 9000, '2026-02-20'),
(5, 6000, '2026-03-10');

-- Create users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(50),
    RegisteredDate DATE
);

INSERT INTO Users VALUES
(1, 'Rajini', CURRENT_DATE()),
(2, 'Vijay', CURRENT_DATE()),
(3, 'Ajith', CURRENT_DATE()),
(4, 'Surya', CURRENT_DATE());



select EmpName from employees where EmpName = REVERSE(EmpName);

select empName, Department,age from employees as e where age = (select min(age) from employees where Department = e.Department);

-- Find employees whose salary is greater than the average salary of employees outside their department.
select * from employees as e where salary >  (select avg(salary) from employees where department not in (e.department));
