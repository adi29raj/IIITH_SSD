create table EMP_LESS_THAN_40_ select Essn from WORKS_ON GROUP BY Essn having SUM(Hours) < 40;

create table EMPMGR  select e2.ssn as Emp_ssn,e1.Fname as Manager_Fname,e1.Minit as Manager_Minit,e1.Lname as Manager_Lname ,e1.ssn as Manager_ssn from EMPLOYEE e1 JOIN EMPLOYEE e2 ON e1.ssn = e2.Super_ssn ORDER BY e1.Fname;

create table EMPMGR40 select * from EMPMGR t1 JOIN EMP_LESS_THAN_40_ t2 ON t1.Emp_ssn = t2.Essn;

select CONCAT(m.Manager_Fname, " " , m.Manager_Minit, " ", m.Manager_Lname) as Full_Name,m.Manager_ssn,d.Dnumber,d.Dname from EMPMGR40 m JOIN DEPARTMENT d ON m.Manager_ssn = d.Mgr_ssn;

