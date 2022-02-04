### Exercicio 1
a) a query ALTER TABLE Actor DROP COLUMN salary, apaga a coluna salary da estrutura da tabela.
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6), adiciona uma nova coluna do tipo varchar.
c) ALTER TABLE Actor CHANGE gender VARCHAR(255), alterado a coluna de gender para receber ate 255 caracteres;
d) ALTER TABLE Actor CHANGE gender VARCHAR(100);
### Exercicio 2
a) UPDATE Actor SET nome = "Reinaldo Gianechi", birth_date = "1985-02-10" WHERE id = "003";
b) UPDATE Actor SET nome = "JULIANA PAES" WHERE nome = "Juliana Paes";
c) UPDATE Actor SET nome = "Larissa Manoela", birth_date = "1996-02-10", salary = 600000, gender = "female" WHERE id = "005"
d) Como não tem um Id válido o comando não altera nenhum valor 
### Exercicio 3
a)DELETE FROM Actor WHERE nome = "Fernanda Montenegro";
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
### Exercicio 4
a)SELECT MAX(salary) FROM Actor;

b)SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)SELECT SUM(salary) FROM Actor

### Exercicio 5
a) Resultado foi a seleção da quantidade de gêneros do sexo female e male 
b) SELECT id, nome FROM Actor ORDER BY nome DESC;
c) SELECT * FROM Actor ORDER BY salary;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;
### Exercicio 6
a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"
UPDATE Movie SET playing_limit_date = "2020-12-01" WHERE id = "002"

d) DELETE FROM Movie WHERE id = "001"

