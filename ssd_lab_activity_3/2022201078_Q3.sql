create table PRODUCTY_DEPT_NUMBER select Dnum from PROJECT where Pname="ProductY";

create table NUM_OF_PRJCTS select p.Dnum , COUNT(p.Dnum) as Number_Of_projects  from PRODUCTY_DEPT_NUMBER y JOIN PROJECT p ON p.Dnum = y.Dnum GROUP BY p.Dnum;

select d.Mgr_ssn,n.Number_Of_projects from NUM_OF_PRJCTS n JOIN DEPARTMENT d ON d.Dnumber = n.Dnum;

