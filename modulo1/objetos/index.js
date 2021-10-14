// EXERCÍCIO DE ESCRITA DO CODIGO 
// 1 - A) O QUE VAI SER IMPRESSO NO CONSOLE ?
// VAI APARECER O PRIMEIRO NOME DA LISTA DO ELENCO [0]- NO CASO É O MATHEUS NACHTERGAELE
// DEPOIS O ULTIMO NOME QUE ESTA NA LISTA DO ELENCO 
//E DEPOIS NA LISTA DE TRASMISSÃO O QUE ESTA NA COLOCAÇÃO DO SEGUNDO ITEM DA LISTA [2] QUE É O canal: "Globo", horario: "14h"


// 2 - A) O QUE VAI SER IMPRESSO NO CONSOLE ?
// VAI SER IMPRESSO NA PRIMEIRA O NOME DO CARRO JUCA, COM A IDADE 3 E A RAÇA SRD
//NA SEGUNDA LINHA O NOME DO GATO POR ALTERADO POR JUBA atraves da variavel do cachorro 
// E NA TERCEIRA LINHA VAI APARECER O NOME da tartatuga pela var. tartaruga trocando a letra A pelo O do nome juba, ficando JUBO, com a idade e a raça sem alterações 
// b) a sintaxe dos três pontos(..) é para cópia o nome dentro do objeto passando o novo valor a ele 


// 3 - A) O QUE VAI SER IMPRESSO NO CONSOLE ?
// Vai ser impreso no primeiro console FALSE e no segundo undefined pois não tem nenhuma nomeclatura indicando a aultura da pessoa 
// o valor impresso undefined é quando não tem valor definido, no caso da altura 

// ESCRITA DE CÓDIGO 
// 1 - A) 
const pessoa = {
    nome: "Eliana",
    apelido: ["liana", "eli", "lili"]
}
function exercicio(apelido) {
    return "Eu sou Eliana, mas pode me chamar de: liana, eli, lili"

}
console.log(exercicio(pessoa))

// b) 

const pessoa = {
    nome: "Eliana",
    apelido: ["liana", "eli", "lili"]
}
const copiapessoa1 = {
    ...pessoa,
    apelido: ["li", "benhe","lia"]
}
function exercicio1(novosApelidos) {
    return `Eu sou Eliana, 
    mas pode me chamar de: ${novosApelidos.apelido}`

}
console.log(copiapessoa1)

//  2) a)

const pessoa1 = {
    nome: "Marcia",
    idade: 51,
    profissao: "professora"
}
const pessoa2 = {
    nome: "Regiane",
    idade: 27,
    profissao: "advogada"
}
function minhaFuncao(pessoa) {
    const resultado = []
    resultado.push(pessoa.nome)
    resultado.push(pessoa.nome.length)
    resultado.push(pessoa.idade)
    resultado.push(pessoa.profissao)
    resultado.push(pessoa.profissao.length)


    return resultado
}
console.log(minhaFuncao(pessoa1))
console.log(minhaFuncao(pessoa2))

// 3 - 
const carrinho = []

const fruta1 = {
    nome: "banana",
    disponivel: true  
}
const fruta2 = {
    nome: "morango",
    disponivel: false
    
}
const fruta3 = {
    nome: "goiaba",
    disponivel: true
}
function adicionarAoCarrinho(fruta) {
    carrinho.push(fruta)
}

adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)
console.log(carrinho)