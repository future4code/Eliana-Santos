// Exercícios de interpretação de código
// 1) 
// O codigo repete cinco vezes, somando o valor +1 dando o total de 10 no console
// 2) a) Vai ser impresso no console todos os numeros maiores que 18 "(19,21, 23, 25, 27, 30)"
// b) Sim, retirando o if, ele percorre a lista toda.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
// 		console.log(numero)
// 	}
// }

// 3) será impreso para cada linha o tanto de asterisco conforme o tanto de linhas no caso 4 linhas e cada uma delas na primeira linha 1 asterisco, na segunda dois asteriscos, na terceira linha três 
// astericos e na quarta quatro asteriscos conforme o número digitado.

// --------------------------------------------------------------------------------

// Exercícios de escrita de código
// 1) 
let numeroDePets = Number(prompt("Quantos pets você tem?"))
let lista = []

if(numeroDePets > 0){
let petNomes = 0 
while (petNomes < numeroDePets) {
    let nomesPets = prompt("Digite o nome do seu pet")
    lista.push(nomesPets) 
    petNomes++
} 

}else {
    console.log("Que pena! Você pode adotar um pet!")

}
console.log(lista)


// 2) 
// a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


for(let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}


// b)Escreva um programa que imprime cada um dos valores do array 
// original divididos por 10
const arrayOriginal = [30, 40, 220, 55, 90]

for (let numero of arrayOriginal){
    console.log(numero / 10)
}

// c)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const acessarLista = []

for(let numero of arrayOriginal){
    if(numero % 2 === 0){
    acessarLista.push(numero)

    }

}
console.log(acessarLista)

// d)
const listaDeNumeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const arrayNumber = []

for (let i = 0; i < listaDeNumeros.length; i++){

    arrayNumber.push(
        `O elemento do índice ${i} é ${listaDeNumeros[i]}`
    )
}

console.log(arrayNumber)

// e) Escreva um programa que imprima no console o 
// maior e o menor números contidos no array original
// 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let valorMin = arrayOriginal[0]
let valorMax = arrayOriginal[0]

for (let i = 0; i < arrayOriginal.length; i++) {

    if (valorMin > arrayOriginal[i]) {
        valorMin = arrayOriginal[i]
    }

    if (valorMax < arrayOriginal[i]) {
        valorMax = arrayOriginal[i]
    }

}

console.log("O maior número é ", valorMax, "e o menor é", valorMin)

