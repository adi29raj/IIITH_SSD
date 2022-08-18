create table MANAGER_EMP_COUNT select e1.Fname as Manager_Fname,e1.Minit as Manager_Minit,e1.Lname as Manager_Lname ,e1.ssn as Manager_ssn,COUNT(e1.ssn) as Number_of_employees
from EMPLOYEE;

select CONCAT(m.Manager_Fname, " " , m.Manager_Minit, " ", m.Manager_Lname) as Full_Name ,m.Manager_ssn,d.Dnumber,d.Dname,m.Number_of_employees from MANAGER_EMP_COUNT m JOIN DEPARTMENT d ON m.Manager_ssn = d.Mgr_ssn;
