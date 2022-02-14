//Exercicio
//1a
//Constructor são basicamente funções de inicialização de uma 
//classe, as quais são invocadas no momento em que objetos 
//desta classe são criadas. Podemos declaro como uma função constructor()
// pode receber um paramêtro ou esta vazia.

//1b
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    public getCpf(): string {
        return this.cpf
    }
    //const user: UserAccount = new UserAccount('55555566669', "Mel", 26)

}
//console.log(user)

//c - para ter acesso as propriedades privadas é so utilizar o método getters e setters
//Exercicio 2
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
}

//exercicio 3
class Bank {
    private accounts: UserAccount[];
    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
}