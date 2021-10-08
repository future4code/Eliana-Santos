// 1 - Exercicio de Interpretação
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// a - vai aparecer os valores 10 e 50 conforme a operação
// b- vai aparecer is not a function 
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// (minhaFuncao(2))
// (minhaFuncao(10))

// 2 - a- Esta função é para saber se a palavra "cenoura" consta no texto inserido, devolvendo true caso tenha e false caso não tenha. 
// // b- qualquer dessas saídas iram dar True 
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// Exercício de escrita de código 
// 1- a função não deve receber nenhum parametro

function escrevaSobreVoce() {
    console.log("Eu sou ELiana, tenho 25 anos, moro em Goiânia e sou estudante.")
}
escrevaSobreVoce()

// b- 
function faleSobreVoce(nome,idade,cidade,profissao) {
    const frasePessoal = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    return frasePessoal
}
const resultado1b = faleSobreVoce("Lais", 23, "São Paulo", "instrutora")
console.log(resultado1b)

// 2- escreva uma função que receba 2 números como parametros 
//  dentro da função faça a soma das duas entradas e retorne o resultado 

function somar(numeroA,numeroB) {
    const soma = numeroA + numeroB
    return soma
}
const resultado = somar(3,10)
console.log(resultado)

// b- faça uma função que recebe 2 numeros e retorne um booleano 
// que informa o se o primeiro numero é maior ou igual ao segundo 

function maiorQue(numeroA,numeroB) {
    let maiorNumero = numeroA >= numeroB
    return maiorNumero
}
let resultado = maiorQue(200,900)
console.log(resultado)

// c- função que receba um número e devolve um booleano indicando se ele é 
// par ou não 

function compararNumero(numeroPar) {
    const numeroComparado = Number(numeroPar) % 2 === 0
console.log(numeroComparado)
}
compararNumero(10)



// d- função que receba uma mensagem como parametro e imprima o tamanho, com letras Maiusculas 

function escrevaMensagem(mensagem) {
    console.log("Tamanho da mensagem:", mensagem.length)
    console.log(mensagem.toUpperCase())
}
escrevaMensagem("Boa tarde, o sol esta lindo hoje")

// 3 - 
// função como somar, subtrair, multiplicar e dividir 
// peça ao usuario para inserir dois numeros e chame essas 4 funcoes com esses valores
// mostre o resultado das operações 

const numeroA = prompt("Informe o primeiro numero:")
const numeroB = prompt("Informe o segundo número:")

function somar(numeroA, numeroB) {
    const soma = numeroA + numeroB
    return soma
}

function subtrair(numeroA, numeroB) {
    const resultado1 = numeroA - numeroB
    return resultado1
}

function multiplicar(numeroA, numeroB) {
    const resultado2 = numeroA * numeroB
    return resultado2
}

function dividir(numeroA, numeroB) {
    const resultado3 = numeroA / numeroB
    return resultado3
}


console.log('Números inseridos: 30 e 3')
console.log("Soma:", somar(numeroA,numeroB))
console.log("Diferença:", subtrair(numeroA,numeroB))
console.log("Multiplicar:", multiplicar(numeroA,numeroB))
console.log("Divisão:", dividir(numeroA,numeroB))