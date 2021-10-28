`````````````````````````````````````````````````````````````
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const array = arrayDeNumeros
  .filter(numero =>  numero === numeroEscolhido);
  
  if(array.length === 0) {
    return 'Número não encontrado'
  } else {
    return `O número ${numeroEscolhido} aparece ${array.length}x`
  }
}
``````````````````````````````````````````````````````````````````