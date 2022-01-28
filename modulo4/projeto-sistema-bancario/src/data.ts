enum TypeOfTransaction {
    PAGAMENTOCREDITO = "PAGAMENTO CREDITO",
    PAGAMENTODEBITO = "PAGAMENTO DEBITO",
    TRANSFERENCIABANCARIA = "TRANSFERENCIA BANCARIA",
    PIX = "PIX"
}

type Account = {
    id: number,
    balance: number,
    bankStatement: BankStatement
}

type BankStatement = {
    value: number
    transactionDate: string,
    description: TypeOfTransaction
}
type User = {
    id: number;
    name: string;
    cpf: string;
    birthDate: string;
    account: Account
};

export let users: User[] = [
    {
        id: 1,
        name: "Alice",
        cpf: "102.555.555-88",
        birthDate: "15/15/2004",
        account: {
            id: 1,
            balance: 800,
            bankStatement: {
                value: 100,
                transactionDate: "15/02/2021",
                description: TypeOfTransaction.PAGAMENTOCREDITO
            }
        }

    },
    {
        id: 2,
        name: "Bob",
        cpf: "275.653.090-52",
        birthDate: "17/02/1976",
        account: {
            id: 2,
            balance: 500,
            bankStatement: {
                value: 20,
                transactionDate: "14/09/2021",
                description: TypeOfTransaction.PAGAMENTODEBITO
            }
        }
    },
    {
        id: 4,
        name: "Dory",
        cpf: "973.214.470-06",
        birthDate: "05/02/1987",
        account: {
            id: 3,
            balance: 200,
            bankStatement: {
                value: 50,
                transactionDate: "07/10/2021",
                description: TypeOfTransaction.PIX
            }
        }
    }
];