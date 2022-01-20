// 1a- Crie uma variável minhaString do tipo string e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?

// O vscode alerta que não é o tipo que foi definido, pois o tipo é string e não number
//const minhaString: string = 20

//1b- Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
//Como fazer para que essa variável também aceite strings? Ou seja, como 
//criamos no typescript uma variável que aceite mais de um tipo de valor?

//Para uma variável aceitar mais de um tipo usamos o Union Type
const meuNumero: number | string = "20"

//1c e d-  
type numOrStr = number | string

enum CoresArcoIris{
    vermelho = "vermelho",
    laranja = "laranja",
    amarelo = "amarelo",
    verde = "verde",
    azul = "azul",
    anil = "anil",
    violeta = "violeta"
}
type person = {
    name: string,
    age: number,
    favoritecolor: string

}

const eli: person = {
    name:"eliana",
    age:25,
    favoritecolor: CoresArcoIris.laranja
}