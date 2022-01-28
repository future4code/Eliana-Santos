import express, { Request, Response } from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get('/test', (req: Request, res: Response) => {
  res.send("Teste funcionando!!")
})

app.get('/produtos', (req: Request, res: Response) => {
  res.send(produtos)
})

app.post('/produtos', (req: Request, res: Response) => {
  try {
    const { name, price } = req.body

    if (!name || !price) {
      throw new Error("campos necessários para criar produto não informados")
    }

    if (typeof (name) !== 'string') {
      throw new Error("Nome tem que ser um texto")
    }

    if (isNaN(price) || price <= 0) {
      throw new Error("Preço tem que ser um número e maior que 0");
    }

    if (req.body) {
      produtos.push({
        id: Date.now().toString(),
        ...req.body
      })
      res.send(produtos).status(201)
    } else {
      throw new Error("Informe os dados do produto corretamente")
    }
  } catch (error: any) {
    switch (error.message) {
      case "campos necessários para criar produto não informados":
        res.status(422)
        break
      case "Nome diferente de string":
        res.status(422)
        break
      case "Preço tem que ser um número e maior que 0":
        res.status(422)
        break
      case "Informe os dados do produto corretamente":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message);
  }
})

app.put('/produtos/:id', (req, res) => {
  try {
    const { price } = req.body

    if (!price) {
      throw new Error("campos necessários para editar o valor")

    }
    if (!isNaN(price) || price <= 0) {
      throw new Error("Preço tem que ser um número e maior que 0");
    }

    if (req.params.id) {

      const produto = produtos.find(produto => produto.id === req.params.id);
      if (produto) {

        const index = produtos.findIndex(produto => produto.id === req.params.id);
        produtos[index] = {
          ...produto,
          price: req.body.price
        }

        res.send(produto).status(200);

      } else {
        throw new Error("Não é possível realizar a operação. ID não encontrado")
      }
    }
  } catch (error: any) {
    switch (error.message) {
      case "campos necessários para editar o valor":
        res.status(422)
        break
      case "Preço tem que ser um número e maior que 0":
        res.status(422)
        break
      case "Não é possível realizar a operação. ID não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message);
  }

})

// lista de produtos:
// 3 = ids 1, 2, 3

app.delete("/produtos/:id", (req, res) => {
  try {

    if (!produtos) {
      throw new Error("Não há produtos cadastrados")
    }

    if (req.params.id) {
      const produto = produtos.find(produto => produto.id == req.params.id);
      if (produto) {
        produtos.splice(produtos.findIndex(produto => produto.id == req.params.id), 1)
      }
      res.send("Tarefa Deletada").status(200)
    } else {
      throw new Error("Não é possível realizar a operação. ID não encontrado")
    }

  } catch (error: any) {
    switch (error.message) {
      case "Não é possível realizar a operação":
        res.status(422)
        break
      case "Não é possível realizar a operação. ID não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message);
  }
})


