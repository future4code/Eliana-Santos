import express, { Request, Response } from 'express'
import cors from 'cors'

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type:UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


// exercicio 1 
//a- Método Get 
//b- indicaria pelo path o caminho da por entidade como /users
// exericio 2
// os paramentros do type são passados por query params
app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {

    const type = req.query.type as UserType;
    const name = req.query.name as string;

    const usersFilter: User[] = users
    .filter((user)=> type ?  user.type === type : true )    
    .filter((user) => name ? user.name.toLocaleLowerCase() === name.toLocaleLowerCase() : true );

    if (!usersFilter) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(usersFilter);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post('/users', (req: Request, res: Response) => {
  try {
    const { name, email, type, age } = req.body

    if (!name || !email || !type || !age) {
      throw new Error("campos necessários para criar produto não informados")
    }

    if (typeof (name) !== 'string') {
      throw new Error("Nome tem que ser um texto")
    }

    if (req.body) {
      users.push({
        id: Date.now().toString(),
        ...req.body
      })
      res.send(users).status(201)
    } else {
      throw new Error("Informe os dados do produto corretamente")
    }
  } catch (error: any) {
    switch (error.message) {
      case "campos necessários para criar produto não informados":
        res.status(422)
        break
      default:
        res.status(500)
    }

    res.send(error.message);
  }
})

app.put('/users/:id', (req, res) => {
  let errorCode: number = 400;
  try {
    const { name, email, type, age } = req.body

    if (!name || !email || !type || !age) {
      throw new Error("campos necessários para editar o valor")
    }
       
    if (req.params.id) {

      const user = users.find(user => user.id === Number(req.params.id));
      if (users) {

        const index = users.findIndex(user => user.id === Number(req.params.id));
        users[index] = {
          ...user,
          
        }

        res.send(users).status(200);

      } else {
        throw new Error("Não é possível realizar a operação. ID não encontrado")
      }
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
})