// 1- Exercício interpretação
 let array
console.log('a. ', array) // "Underfined"

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) //(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6] 
console.log('f. ', valor) // 9

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
// resultado "SUBI NUM ÔNIBUS EM MIRROCOS" 29 - os "A" serão substituídos pelo I, o tamanho da frase é 29 caracteres

// Exercício de ESCRITA DO CÓDIGO 
// 1- PERGUNTE AO USUARIO SEU NOME E EMAIL 
// IMPRIMA NO CONSOLE:
// O e-mail `
// emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt("Qual o seu nome ?")
const emailDoUsuario =  prompt("Qual o seu e-mail?")
const fraseUsuario =  `O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`
console.log(fraseUsuario)
 
// 2- array com 5 das suas comidas preferidas, 
// armazenado em uma variável.
// IMPRIMA NO CONSOLE A LISTA 
// Faça um programa que contenha um array com 5 das 
//suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// pergunte ao usuario a comida preferida e troque a segunda comida da sua a lista
// pela dele, imprima no console a nova lista 


const comidasPreferidas = ["Lasanha", "Pudim", "Bolo", "Sorvete", "Hamburguer"]
console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas [0]}
${comidasPreferidas [1]}
${comidasPreferidas [2]}
${comidasPreferidas [3]}
${comidasPreferidas [4]}`)

const comidaPreferida = prompt("Qual a sua Comida Preferida ?")
comidasPreferidas[1] = comidaPreferida

console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas [0]}
${comidasPreferidas [1]}
${comidasPreferidas [2]}
${comidasPreferidas [3]}
${comidasPreferidas [4]}`)


// //3- 
const listaDeTarefas = []
console.log(listaDeTarefas)

const primeiraTarefa = prompt("Digite uma tarefa")
const segundaTarefa = prompt("Digite uma tarefa")
const terceiraTarefa = prompt("Digite uma tarefa")
listaDeTarefas.push(primeiraTarefa, segundaTarefa,terceiraTarefa)

console.log(listaDeTarefas)

const indice = prompt("Escolha uma número que corresponde com uma das tarefas realizadas: 0, 1 ou 2")

const novaLista = listaDeTarefas.splice(indice + 1)
console.log(novaLista)