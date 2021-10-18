// EXERCÍCIOS DE INTERPRETAÇÃO
// 1) Vai ser impresso no console uma nova array com os usuários: nome e apelido e o index - a posição de cada usuários na array 
// 2) Vai ser impresso no console uma nova array somente com os nomes do array
//   vai ser impresso no console uma nova array somente com os nomes do array
// 3) Vai aparecer no console uma nova array - somente com os nome de usuario que estão na posição 0 e 1 da arrayOriginal do usuario, 
// como foi usado o filter ele altera o tamanho do array, fazendo uma nova lista conforme o desejado no return tirando o nome e apelido tenham "chijo"

// Exercícios De ESCRITA
// 1)a) Crie um novo array que contenha apenas o nome dos doguinhos
// b) Crie um novo array apenas com os cachorros salsicha
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const pegarNomesDosPets = (pets) => {
    return pets.nome
} 
const nomesPets = pets.map(pegarNomesDosPets)
console.log(nomesPets)

const doguinhosSalsichas = pets.filter((racaSalsicha) => {
    return racaSalsicha.raca === "Salsicha"
})
console.log(doguinhosSalsichas)

// c) Criar um array e enviar uma mensagem para todos os clientes da raca Poodle
const doguinhosPoodles = pets
    .filter((pet) => pet.raca === "Poodle")
    .map((pet) =>  `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`) 

console.log(doguinhosPoodles)

// 2- 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a)
const nomesProdutos = produtos.map(produto => produto.nome)
console.log(nomesProdutos)

// b)
const produtoDesconto = produtos.map(produto => {
    return { nome: produto.nome, preco: (produto.preco - (produto.preco * 0.05)).toFixed(2) }
})
console.log(produtoDesconto)

// c) 
const nomeBebidas = produtos
    .filter((produto) => produto.categoria === "Bebidas")
    console.log(nomeBebidas)

// d)
const produtoYpe = produtos.filter((produto) => produto.nome.includes("Ypê"))
console.log(produtoYpe)

// e)
const produtoYpe = produtos
    .filter((produto) => produto.nome.includes("Ypê"))
    .map((produto) => `Compre ${produto.nome} por ${produto.preco}`)

console.log(produtoYpe)