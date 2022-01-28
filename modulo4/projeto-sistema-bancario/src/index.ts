import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
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

app.post('/users', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { name, cpf, birthDate } = req.body

    if (!name || !cpf || !birthDate) {
      errorCode = 422;
      throw new Error("Campos não preenchidos corretamente");
    }
console.log(calcAge(convertToDate(birthDate)))
    if (calcAge(convertToDate(birthDate)) >= 18 ) {
      errorCode = 422
      throw new Error("A idade não é permitida. Usuário tem que possui idade igual ou maior que 18 anos");
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
    res.status(errorCode).send({ message: error.message })
  }
})



// app.get("/users/:id", (req: Request, res: Response) => {
//   let errorCode: number = 400;
//   try {
//     const id: number = Number(req.params.id);

//     if (isNaN(id)) {
//       errorCode = 422; 
//       throw new Error("Invalid value for id. Please send a number.");
//     }

//     const user = users.find((user) => {
//       return user.id === id;
//     });

//     if (!user) {
//       errorCode = 404;
//       throw new Error("User not found.");
//     }

//     res.status(200).send(user);
//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message });
//   }
// });

// app.post("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400;
//   try {
//     const { id, name, email, type, age } = req.body;

//     if (!id || !name || !email || !type || !age) {
//       errorCode = 422;
//       throw new Error("Please check the fields!");
//     }

//     const newUser: user = {
//       id,
//       name,
//       email,
//       type,
//       age,
//     };

//     users.push(newUser);

//     res.status(201).send({ message: "User created successefully" });
//   } catch (error: any) {
//     res.status(errorCode).send({ messagem: error.message });
//   }
// });

// app.patch("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400;
//   try {
//     const { id, name, email, type, age } = req.body;

//     if (!id || !name || !email || !type || !age) {
//       errorCode = 422;
//       throw new Error("Please check the fields!");
//     }

//     const newUser: user = {
//       id,
//       name,
//       email,
//       type,
//       age,
//     };

//     users.push(newUser);

//     res.status(201).send({ message: "User updated successefully" });
//   } catch (error: any) {
//     res.status(errorCode).send({ messagem: error.message });
//   }
// });

app.post("/users/signup", (req: Request, res: Response) => {

  try {

    const { email, password } = req.body


    // implementar cadastro de usuário
    res.status(200).send({ email, password })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})