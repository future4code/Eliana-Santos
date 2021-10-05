// Interpretação de código
// 1- Exercício 
// let a = 10
// let b = 10 
//  console.log (10) 
//  b = 5 
//console.log(10,5)


// 2- Exercício
//let a = 10
//let b = 20
//c = a
//b = c
//a = b
//console.log(10,10,10)

// 3- exercício 
// let horasTrabalhadaDia = prompt("Quantas horas você trabalha por dia")
// let recebePorDia = prompt("Quanto você recebe por dia")
// alert(`Voce recebe ${horasTrabalhadaDia/recebePorDia} por hora`)

// Escrita de código

// 1- Exercício
let nomeDaVariavel
let idadeDaVariavel
console.log (typeof nomeDaVariavel) 
console.log (typeof idadeDaVariavel)
// resultado undefined - pois representa a falta de valor da variável
 
let nomeDaVariavel = prompt("Qual o seu nome ?")
console.log (typeof nomeDaVariavel)
let idadeDaVariavel = prompt("Qual sua idade ?")
console.log (typeof idadeDaVariavel)
//  Resultado -  notei que os dois tipos de variaveis retorno tipo string, pois o prompt considera que todas as entradas são do tipo string

const nomedoUsuario = "nome"
const idade = 25
console.log("Olá,", nomedoUsuario, "você tem", idade, "anos");

// 2- Exercício

let resposta1 = prompt("Você gosta de chocolate ?")
console.log ("Você gosta de chocolate ?", resposta1)

let resposta2 = prompt("Você gosta de frutas ?")
console.log ("Você gosta de frutas ?", resposta2)

let resposta3 = prompt("Você gosta de gatos")
console.log ("Você gosta de gatos", resposta3)


// 3- Exercício
let a = 10
let b = 25
let c;

c = a;  // 10
a = b;  // 25
b = c;  // 10

console.log("o novo valor de a", a)
console.log("o novo valor de b", b)
