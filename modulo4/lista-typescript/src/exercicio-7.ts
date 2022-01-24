type produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

// 1° Ordenar a lista pela a quantidade de cada produto (User função sort do Array)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// 2° Usar função para colocar o valor do produto no formato padrão BRL:

const ajustaPreco = (preco: number): string => {
    const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    return `R$ ${valorAjustado}`
}

const estoque: produto[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]
const listaOrdenada = estoque.sort((a, b) => {
    if (a.quantidade > b.quantidade) {
        return 1;
    }
    if (a.quantidade < b.quantidade) {
        return -1;
    }
    return 0;
}
)
listaOrdenada.forEach(produto => {
    console.log(produto.quantidade, ajustaPreco(Number(produto.valorUnitario)))

})

// Exbir array com console.