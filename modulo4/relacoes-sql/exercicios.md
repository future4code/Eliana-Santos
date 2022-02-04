### Exercicio 1
a) Uma chave estrangeira ou Foreign Key permite associar as referência de outra tabela ou campo;

b) INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "comedia maravilhosa!",
    8,
		"003"
);
c) Não é possível adicionar ou atualizar uma linha filha sem a passar a chave estrangeira
d) ALTER TABLE Movie DROP COLUMN rating;
e) Não é possível excluir ou atualizar uma linha pai pois precisa passar uma chave estrangeira
### Exercicio 2
a) Essa tabela fica associada a tabela atores e filmes, associando quem já fez qual filme fazendo referência com a chave estrangeira;
b) 14:32:44	INSERT INTO MovieCast(movie_id, actor_id) VALUES(   "007",     "001" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-eliana-cristina-de-deus-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0,204 sec
// Não é possível criar a relação entre um id de filme inexistente a chava estrangeira não permite;
c) 
14:35:25 DELETE FROM Actor WHERE id = "001" Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`carver-eliana-cristina-de-deus-santos`.`MovieCast` , CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS `Actor` (`id`)) 0,204 seg
### Exercicio 3
a) A condição ON existe para fazer a referência certa entre as tabelas, sem ele as informações não vem na ordem certa;
b)