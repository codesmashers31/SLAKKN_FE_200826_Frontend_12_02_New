SELECT * FROM employees.employees_1;

use `employees`;


select department,count(*) as Total_Count from employees_1 group by department;

select department,avg(salary) as Avg_Salary from employees_1 group by department;

select department,max(salary) as Total_salary from employees_1 group by department;



alter table employees_1 add city varchar(200);


select city ,count(*) as Total_Salary from employees_1 group by city;

select city ,avg(salary) as Avg_Salary from employees_1 group by city;


select city ,avg(salary) as Avg_Salary from employees_1 where salary > 50000 group by city;

