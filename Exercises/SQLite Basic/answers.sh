Ex 1: Get all the names of students in the database:
query: : Select name from students

OutPut:	
Alex
Basma
Hasan
Jana
Layal
Robert

ex2: Get all the data of students above 30 years old
query: Select * from students WHERE age>30

Output:
	
	
5
Robert
34
M
500
6
Jana
33
F
500


ex3:Get the names of the females who are 30 years old 
	query: Select name from students WHERE Gender='F' AND age>30

OutPut:


Jana



ex4: Get the number of Points of Alex
	query:Select Points from students WHERE Name='Alex'

Output:

200

ex5: Add yourself as a new student (your name, your age...) 

query:INSERT INTO students ("ID", "Name", "Age", "Gender", "Points") VALUES ('7', 'Hackour', '23', 'M', '10000');


1
Alex
21
M
200
2
Basma
25
F
300
3
Hasan
30
M
150
4
Layal
18
F
350
5
Robert
34
M
500
6
Jana
33
F
500
7
Hackour
23
M
10000



ex6: Increase the points of Basma because she solved a new exercise 

query: UPDATE students
	SET Points = 350
	WHERE name = 'Basma';



Output:


1
Alex
21
M
200
2
Basma
25
F
350
3
Hasan
30
M
150
4
Layal
18
F
350
5
Robert
34
M
500
6
Jana
33
F
500
7
Hackour
23
M
10000




ex7:Decrease the points of Alex because he's late today 

query: UPDATE students
	SET Points = 150
	WHERE name = 'Alex';

Output:


1
Alex
21
M
150
2
Basma
25
F
350
3
Hasan
30
M
150
4
Layal
18
F
350
5
Robert
34
M
500
6
Jana
33
F
500
7
Hackour
23
M
10000


------------------------------------------------------------------


Creating Table


CREATE TABLE "graduates" (
	"ID"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"Name"	TEXT NOT NULL UNIQUE,
	"Age"	INTEGER,
	"Gender"	TEXT,
	"Points"	INTEGER,
	"Graduation"	TEXT
);

1: INSERT INTO graduates (ID, Name, Age, Gender, Points) SELECT ID, Name, Age, Gender, Points FROM students WHERE Name = "Layal"

2: UPDATE graduates SET Graduation = "08/09/2018" WHERE Name = "Layal"

3: DELETE FROM students WHERE Name = "Layal"

------------------------------------------------------------------

Joins

1: SELECT employees.Name, employees.Company, companies.Date
	FROM employees
	INNER JOIN companies ON employees.Company=companies.Name

OutPut:

Marc	Google		1998
Maria	Google		1998
Alaa	Facebook	2004
Hala	Snapchat	2011

2: SELECT employees.Name
  FROM employees
  INNER JOIN companies ON employees.Company=companies.Name
  WHERE companies.Date<2000

OutPut:

  Marc
  Maria

3: SELECT companies.Name
FROM companies
INNER JOIN employees ON employees.Company=companies.Name
WHERE employees.Role='Graphic Designer';

OutPut:

Snapchat

------------------------------------------------------------------

COUNT & FILTER

1: SELECT Name FROM students WHERE Points=(SELECT max(Points) FROM students)

OutPut:

Robert
Jana
New Guy

2: SELECT avg(Points) FROM students 

OutPut:
358.333333333333

3: SELECT count() FROM students WHERE Points = 500

Output:
3

4:SELECT Name FROM students WHERE Name like '%s%'

Output:
Basma
Hasan

5: SELECT Name FROM students ORDER BY Points DESC

OutPut:

Robert
Jana
New Guy
Basma
Alex
Hasan




