//Crie um função que receba uma string com o nome e outra string 
//com uma data de nascimento (ex.: “24/04/1993”). A função deve 
//separar o dia, o mês e ano e retornar uma string no seguinte formato: 

function dadosPessoais() {
    const nome: string = "Eliana"
    const dataDeNascimento : string = "27/02/1996"
    const resultado = dataDeNascimento.split("/")
    console.log(`Olá me chamo ${nome}, nasci no dia ${resultado[0]} do mês de ${resultado[1]}
do ano de ${resultado[2]}`)
    
}
dadosPessoais()