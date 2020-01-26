"Select name from students"

"Select * from students WHERE age>30"

"Select name from students WHERE Gender='F' AND age>30"

"Select Points from students WHERE Name='Alex'"

"INSERT INTO students ('ID', 'Name', 'Age', 'Gender', 'Points') VALUES ('7', 'Hackour', '23', 'M', '10000')"

"UPDATE students SET Points = 350 WHERE name = 'Basma'"


"UPDATE students SET Points = 150 WHERE name = 'Alex'"


"CREATE TABLE 'graduates' ('ID'	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,'Name'	TEXT NOT NULL UNIQUE,'Age'	INTEGER,'Gender'	TEXT,'Points'	INTEGER,'Graduation'	TEXT)"

 "INSERT INTO graduates (ID, Name, Age, Gender, Points) SELECT ID, Name, Age, Gender, Points FROM students WHERE Name = 'Layal'"

 "UPDATE graduates SET Graduation = '08/09/2018' WHERE Name = 'Layal'"

"DELETE FROM students WHERE Name = 'Layal'"



"SELECT employees.Name, employees.Company, companies.Date FROM employees INNER JOIN companies ON employees.Company=companies.Name"

"SELECT employees.Name FROM employees INNER JOIN companies ON employees.Company=companies.Name WHERE companies.Date<2000"


"SELECT companies.Name FROM companies INNER JOIN employees ON employees.Company=companies.Name WHERE employees.Role='Graphic Designer'"



"SELECT Name FROM students WHERE Points=(SELECT max(Points) FROM students)"

"SELECT avg(Points) FROM students "



"SELECT count() FROM students WHERE Points = 500"



"SELECT Name FROM students WHERE Name like '%s%'"



"SELECT Name FROM students ORDER BY Points DESC"





