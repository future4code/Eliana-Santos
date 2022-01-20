// Exericio 2 
//a)Quais são as entradas e saídas dessa função? 
//Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a,b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//Entrada é o paramento numeros e sua saída é o return estaticas - são os numeros que vão
//estar ordenados dentro de um array 
// b) somente a tipagem números 
//c)
type amostraDeDados = {
    numeros:number,
    obterEstatisticas: boolean
}
const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number) => {}
}
