//Crie uma função que receba um parâmetro qualquer e que 
//imprima no console o tipo da variável. 

 function varQualquer() {
    const cores: string = "azul"
    if (typeof cores === 'string') {
        return 'string'
    } else{
        return null
    }
}
console.log(varQualquer())