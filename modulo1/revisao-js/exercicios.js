// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const tamanhoArray = array.length
    return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = array.reverse()
    return arrayInvertido

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b);
    return array

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((array) => array % 2 === 0)
    return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((array) => array % 2 === 0).map((array)=> array ** 2)
   return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {


}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
           
        }
    }return numerosPares;

}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}