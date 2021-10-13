// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// // EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Qual a altura um retângulo ?")
  const largura = prompt("Qual a largura de um retângulo ?")
  const areaDoRetangulo = altura * largura
  console.log(areaDoRetangulo)

  return areaDoRetangulo

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual o ano Atual?")
  const anoNascimento = prompt("Qual o ano do seu nascimento ?")
  const idade = anoAtual - anoNascimento
  console.log(idade)
  return idade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const imc = peso / (altura * altura)
 console.log(imc)
 return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual o seu nome?")
  let idade = prompt("Qual a sua idade?")
  let email = prompt("Qual o seu e-amil?")
  let frasePessoal = `Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}.`
  console.log(frasePessoal)
  return frasePessoal
}  

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas1 = prompt("Qual a sua primeira cor favorita?")
  const coresFavoritas2 = prompt("Qual a sua segunda cor favorita?")
  const coresFavoritas3 = prompt("Qual a sua terceira cor favorita?")
  const array = [coresFavoritas1, coresFavoritas2, coresFavoritas3]
  console.log(array)
  return array
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavra = string.toUpperCase()
  console.log(palavra)
  return palavra
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressoTeatro = custo / valorIngresso 
  return ingressoTeatro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const stringTamanho = string1.length === string2.length
  return stringTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const UltimoElemento = array[array.length - 1]
  return UltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]

  const aux = array[0];

  array[0] = ultimoElemento;
  array[array.length -1] =  aux

  console.log(array[0])

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stringMaiorOuMenor = string1.toUpperCase().toLowerCase() === string2.toUpperCase().toLowerCase()
  return stringMaiorOuMenor
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}