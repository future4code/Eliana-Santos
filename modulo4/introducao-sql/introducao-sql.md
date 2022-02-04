### Exercicio 1
A query VARCHAR - significa string e (255) o número de caracteres permitido
DATE - recebe uma data no seguinte formato ano/mes/dia
PRIMARY KEY- precisa receber um valor
NOT NULL - não precisa receber nenhum valor 

a-Comando SHOW DATABASE - retorna informaçoes sobre a database registrada 
b- Comando SHOW TABLES - mostra a tables que foram criadas
c- Comando DESCRIBE Actor - usado para conferir a estrutura da tabela. 

### Exercicio 2
a) 16:29:09	INSERT INTO Actor (id, nome, salary, birth_date, gender) VALUES(   "002",    "Glória Pires",   1200000 ,   "1963-08-23",    "male" )	1 row(s) affected	0,441 sec

b) 16:30:49	INSERT INTO Actor (id, nome, salary, birth_date, gender) VALUES(   "002",    "Camila Queiroz",   1500000 ,   "1992-08-25",    "male" ) ### Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,162 sec
O erro aconteceu pois, não pode id, não pode se repetir.

c) 16:37:14	INSERT INTO Actor (id, nome, salary) VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19",    "female" )	Error Code: 1136. Column count doesn't match value count at row 1	0,161 sec
- Erro A contagem de colunas não corresponde à contagem de valores na linha 1
não foi definido o salário nos parẽnteses, por isso a contagem de valores não foi correspondida;

d) 16:40:43	INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. Field 'nome' doesn't have a default value	0,285 sec
- Erro - o campo nome não recebeu um valor 

e) 16:42:29	INSERT INTO Actor (id, nome, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33,   1979-03-26,    "female" )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0,247 sec
- Erro a data não segue um padrão como solicitado no formato da tabela como ""
### Exercicio 3
a) SELECT id, nome from Actor WHERE gender = "female";
b) SELECT salary from Actor WHERE nome = "Tony Ramos";
c) 17:01:53	SELECT id, nome from Actor WHERE id = "002"  SELECT * from Actor WHERE gender = "invalid"	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'SELECT * from Actor WHERE gender = "invalid"' at line 3	0,329 sec
-Erro fala que não possue nenhum campo na lista como "invalid";

d) SELECT id, nome from Actor WHERE salary < 500000;
e) Não apareceu nenhum erro;

### Exercicio 4
a) A query acima me retorna todos os elementos que possuem a letra A e J no nome e o salário maior que 300.000
b) SELECT * FROM Actor WHERE nome NOT LIKE "A%" AND salary > 350000;
c) SELECT * FROM Actor WHERE nome LIKE "%g%" OR nome LIKE "%G%";
d)SELECT * FROM Actor WHERE (nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
### Exercicio 5
a) CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
)
b)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
  );
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com elas",
  "2012-12-27",
  10
  );
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
  );
  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Ricos de Amor",
 "Teto é filho de Teodoro, um empresário rico que é conhecido como O Rei do Tomate. O rapaz, que em breve herdará a fábrica do pai, se apaixona por Paula, uma jovem decidida que estuda para ser médica e não vê a hora de se tornar independente. Com medo da reação da garota, Teto mente sobre sua condição financeira e finge ter origem humilde",
  "2020-04-30",
  10
  );
### Exercicio 6
a)   SELECT id, title, rating FROM Movie WHERE id = "002";
b)   SELECT * FROM Movie WHERE title = "Ricos de Amor";
c)   SELECT id, title, synopsis FROM Movie WHERE rating > 7
### Exercicio 7
 a) SELECT * FROM Movie WHERE title LIKE "%vida%";
 b) SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%"
 c) SELECT * FROM Movie WHERE release_date < "2020-05-04"
 d) SELECT * FROM Movie WHERE release_date < "2020-05-04" AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7