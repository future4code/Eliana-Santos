// Compara datas com o a lib "moment JS", levando em consideração as regas de validade da identidade;

//- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 
//5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 
//10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

function stringToDate(dateStr: string): Date {
    var parts: string[] = dateStr.split("/");
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
}

const dataNascimento: string = prompt('Qual sua data de Nascimento?')
const dataEmissaoId: string = prompt('Qual sua data de Nascimento?')


if()



console.log(stringToDate( ))