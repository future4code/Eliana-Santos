// 1- Exercício interpretação de código
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  // False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)  // True

console.log("d. ", typeof resultado) // "Boolean"

// 2- Notei que ao invés de ocorrer a soma, os números aparecem juntos sem somar 
// 3- 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(Number(primeiroNumero) + Number(segundoNumero))
//  como foi determinado a variavel como tipo string o comando não reconhece a soma, mas quando colocamos o Number junto com as palavras ocorrer a soma entres eles ocorrendo assim o resultado da soma


// Exercício de escrita de código
// 1-
let idadeDoUsuario = prompt("Qual a sua idade?")
let idadeDoMelhorAmigo = prompt("Qual a idade do seu melhor amigo ?")
let resultado = idadeDoUsuario > idadeDoMelhorAmigo

console.log("Sua idade é maior do que a dos seu melhor amigo ?",resultado)
console.log(Number(idadeDoUsuario - Number(idadeDoMelhorAmigo,)))
// 2-

const numeroPar = prompt("Insira um número Par")
const resultado = numeroPar % 2
console.log("O resto da divisão é: ", Number(resultado))
// Quando insere os números Par o resto fica 0, ocorrendo assim a divisão 
// e quando insere os números impares o resto fica 1, ocorrendo assim o resto da divisão

//  3-
const idade = prompt("Qual sua idade ?")
const dias = idade * 365
const meses = dias / 30
const horas = dias * 24

console.log(idade)

console.log(dias)
console.log(meses)
console.log(horas)

// 4- 
const primeiroNumero = prompt("Primeiro Número")
const segundoNumero = prompt("Segundo Número")

// // O primeiro numero é maior que segundo
console.log (primeiroNumero > segundoNumero)

// // O primeiro numero é igual ao segundo?6
console.log (primeiroNumero === segundoNumero)

// // O primeiro numero é divisível pelo segundo?
const resto = Number(primeiroNumero) % Number(segundoNumero)
console.log(resto === 0)

// // // O segundo numero é divisível pelo primeiro? 
const resto1 = Number(segundoNumero) % Number(primeiroNumero)
console.log(resto1 === 0)
