type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Para ocorrer a traspilação tem que configurar o comando do start no arquivo package.json
// indicando o caminho da pasta a onde se encontra o arquivo em .ts e também nas configuraçoes
// do arquivo tsconfig.json indicar o caminho da pasta, e após isso chamar no terminal tsc e nome
// da pasta  e depois o comando node e nome da pasta

//c) O arquivo estando dentro da pasta src é so indicar o caminho no arq. package.json e tsconfig.json
// Podemos fazer a transpilação com so rodando o comando tsc que todos os arquivos 
// .ts estive na pasta src serão compilados 

