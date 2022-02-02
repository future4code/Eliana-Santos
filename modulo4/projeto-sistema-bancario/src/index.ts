import express, { Request, Response } from "express";
import cors from "cors";
import { TypeOfTransaction, users } from "./data";
import { calcAge, convertToDate } from "./util";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003")
})

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);

});

app.get("/bankStatement", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const cpf = req.query.cpf as string
    const user = users.find((user) => user.cpf === cpf);

    if (!user) {
      errorCode = 404;
      throw new Error("CPF não encontrado")
    }

    const name = req.query.name as string;

    if (user.name !== name) {
      errorCode = 404;
      throw new Error("Nome não encontrado")
    }

    res.status(200).send(user.account.bankStatement);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post('/users', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { name, cpf, birthDate } = req.body

    if (!name || !cpf || !birthDate) {
      errorCode = 422;
      throw new Error("Campos não preenchidos corretamente");
    }

    if (calcAge(convertToDate(birthDate)) < 18) {
      errorCode = 422
      throw new Error("A idade não é permitida. Usuário tem que ser maior de 18 anos");
    }

    const isCpf = users.find(user => user.cpf === req.body.cpf);
    if (isCpf) {
      throw new Error("CPF já cadastrado")
    }

    const id = Date.now();

    if (req.body) {
      users.push({
        id: id,
        name: req.body.name,
        cpf: req.body.cpf,
        birthDate: req.body.bithDate,
        account: {
          id: id,
          balance: 0,
          bankStatement: []
        }
      })
      res.send(users).status(201)
    } else {
      throw new Error("Informe os dados corretamente")
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.post('/deposit', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { cpf, name, value } = req.body;

    if (!cpf || !name || !value) {
      errorCode = 422;
      throw new Error("Campos não preenchidos corretamente");
    }

    const user = users.find((user) => user.cpf === cpf);

    if (!user) {
      errorCode = 404;
      throw new Error("CPF não encontrado")
    }

    if (user.name !== name) {
      errorCode = 404;
      throw new Error("Nome não encontrado")
    }


    if (Number(value) <= 0) {
      errorCode = 422;
      throw new Error("Valor a ser depositado dever ser maior que 0");
    }

    if (user) {

      let data = new Date();
      let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();

      user.account.bankStatement.push({
        value: value,
        transactionDate: dataFormatada,
        description: TypeOfTransaction.DEPOSITO
      });

      user.account.balance = user.account.balance + value;

      res.send(users).status(201);
    } else {
      throw new Error("Informe os dados corretamente")
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
});
