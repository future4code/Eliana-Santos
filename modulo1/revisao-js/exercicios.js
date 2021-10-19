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
    const numerosPares = array.filter((array) => array % 2 === 0).map((array) => array ** 2)
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    maiorNumero = num1 > num2 ? num1 : num2;
    menorNumero = num1 < num2 ? num1 : num2;

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
    diferenca = maiorNumero - menorNumero;

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)

        }
    } return numerosPares;

}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    a = ladoA
    b = ladoB
    c = ladoC

    if (a === b && b === c) {
        return "Equilátero"
    } if (a === b || b === c || c === a) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = array.sort((a, b) => a - b)
    const segundoMaiorValor = arrayOrdenado[arrayOrdenado.length - 2]
    const segundoMenorValor = arrayOrdenado[1]

    const arrayResultado = [segundoMaiorValor, segundoMenorValor]

    return arrayResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.map((ator) => ` ${ator}`)}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"

    }
    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60 )
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60 )
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((conta) => {
        let soma = conta.compras.reduce((acc, cur) => acc + cur, 0)
        let saldo = conta.saldoTotal
        return { ...conta, saldoTotal: saldo - soma, compras: [] }

    })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {


}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((primeira, segunda) => {
        return new Date(primeira.dataDaConsulta.split("/").reverse()).getTime() -
            new Date(segunda.dataDaConsulta.split("/").reverse()).getTime()
    })
}