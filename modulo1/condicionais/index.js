//  Exercicios de interpretação 
// 1 - a) Explique o que o código faz. Qual o teste que ele realiza? 
// O bloco de codigo if - é executado se a condição for true e o codigo else é executado quando a condição for false
// b) Para que tipos de números ele imprime no console "Passou no teste"?
// para os tipo de números pares 
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// para os tipos de números ímpares

// 2- a) Para que serve o código acima?
// Para compara a igualdade através do switch case, se a fruta escolhida for laranja, maçã
// pêra ou uva, saíra o valores que estão no case indicando a igualdade do preço sendo executado pelo break e o 
// default é usado para o codigo dentro dele seja executado se o valor da variável não bater com as opções da cases dando o resultado de R$ 5.
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// será impresso a mensagem "O preço da fruta Maçã é R$ 2.25"
// c) Considere que um usuário queira comprar uma Pêra, qual seria a 
// mensagem impressa no console se retirássemos o break que está 
// logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// Ocorrendo a retirada do break, será impressa a mensagem 
// "O preço da fruta Pêra é R$ 5", pois sem o break não executada o valor que esta no bloco, 
// passando pelo default pois o valor da variável não bate com as opções acima.

// 3) a) O que a primeira linha está fazendo?
//  está pedindo para o usuário digitar um número 
// b) Considere um usuário digitou o número 10. 
// Qual será a mensagem do terminal? E se fosse o número -10?
// Digitando o número 10 aparecerá a mensagem "Esse número passou no teste", se for -10 is not defined
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//  Sim, pois o console.log(mensagem) está fora do código da ação, 
// ele não mostra a mensagem que esta na variável mensagem, 
// ele só será executado se estiver dentro do bloco do código if dentro das chaves{}

// EXERCÍCIOS DE ESCREITA DE CÓDIGO

// 1)
let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

if (idadeDoUsuario > 18){
    console.log("Você pode Dirigir")
} else {
    console.log("Você não pode dirigir")
}

// 2) if/else

let horarioDeAula = prompt("Qual turno do dia você estuda, matutino digite M, vespertino digite V, noturno digite N ?")

if(horarioDeAula === "M") {
    console.log("Bom dia!")
}else if (horarioDeAula === "V"){
    console.log("Boa Tarde!")
} else if(horarioDeAula === "N") {
    console.log("Boa noite!")
}

// 3) switch case

let horarioDeAula = prompt("Qual turno do dia você estuda, matutino digite M, vespertino digite V, noturno digite N ?")

switch (horarioDeAula) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Horário indefinido")
        break;
}

// 4-

let generoDofilme = prompt("Qual o gênero do filme que vamos assistir?")
let valorDoIgresso = Number(prompt("Qual o valor do ingresso?"))

if(generoDofilme === "fantasia" && valorDoIgresso < 15 ){
       
    console.log("Bom Filme!")
} else {
    console.log("Escolha outro Filme :(")
}

