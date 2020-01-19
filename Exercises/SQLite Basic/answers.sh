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




