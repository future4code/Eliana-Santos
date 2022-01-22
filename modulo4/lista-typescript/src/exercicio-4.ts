import { setOriginalNode } from "typescript"

enum SETORES {
    MARKENTING = 'marketing',
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type person = {
    nome: string
    salario: number
    setor: SETORES
    presencial: boolean
}


function selecionados() {
    const funcionarios: person[] =
        [
            { nome: "Marcos", salario: 2500, setor: SETORES.MARKENTING, presencial: true },
            { nome: "Maria", salario: 1500, setor: SETORES.VENDAS, presencial: false },
            { nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
            { nome: "João", salario: 2800, setor: SETORES.MARKENTING, presencial: false },
            { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
            { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
            { nome: "Paola", salario: 3500, setor: SETORES.MARKENTING, presencial: true }
        ]
    console.log(funcionarios.filter((funcionario) => funcionario.setor === SETORES.MARKENTING))
}
selecionados()
