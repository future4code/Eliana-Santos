import express from "express"
import cors from "cors"
import { AddressInfo } from "net";

const app = express()

app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓").status(200)
})

type Tarefa = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
let tarefas: Tarefa[] = [
  {
    userId: 1,
    id: 1,
    title: "vacinar os dogs e os cats",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "fazer compras no mercado",
    completed: true
  },
  {
    userId: 1,
    id: 3,
    title: "lavar o carro",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "fazer caminhadas no parque com os dogs",
    completed: true
  }
]

app.get('/tarefas', (req, res) => {
  res.send(tarefas).status(200)
})

app.get("/tarefas/completed", (req, res) => {
  res.send(
    tarefas.filter((tarefa) => tarefa.completed)
  ).status(200);
})

app.get("/tarefas/not-completed", (req, res) => {
  res.send(
    tarefas.filter((tarefa) => !tarefa.completed)
  ).status(200);
})

app.post('/tarefas', (req, res) => {
  if (req.body) {
    tarefas.push(req.body)
    res.send(tarefas).status(201)
  } else {
    res.send("Informe os dados da tarefa corretamente").status(404)
  }
})

app.put('/tarefas/:id', (req, res) => {
  if (req.params.id) {

    const tarefa = tarefas.find(tarefa => tarefa.id === Number(req.params.id));
    if (tarefa) {

      const index = tarefas.findIndex(tarefa => tarefa.id == Number(req.params.id));
      tarefas[index] = {
        ...tarefa,
        completed: !tarefa.completed
      }

      res.send(tarefas).status(200);

    } else {
      res.status(404).send("Não é possível realizar a operação. ID ausente")
    }
  }
})

app.delete("/tarefas/:id", (req, res) => {
  if (req.params.id) {
    tarefas.splice(tarefas.findIndex(tarefa => tarefa.id == Number(req.params.id)), 1)
  }
  res.send("Tarefa Deletada").status(200)
})