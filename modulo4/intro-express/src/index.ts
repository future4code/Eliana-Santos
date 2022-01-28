import express from "express";
import cors from "cors"

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

// exercicio 1
app.get("/", (req, res) => {
    res.send("Hello from Express")
})

// exercicio 2
type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}


// exercicio 3

const users: User[] = [
    {
        id: 1,
        name: 'Eliana',
        phone: "32 3343544",
        email: "liana@gmail.com",
        website: 'www.studenttech.com'
    },
    {
        id: 2,
        name: 'Joana',
        phone: "31 3543544",
        email: "joana@gmail.com",
        website: 'www.joana.com'
    },
    {
        id: 3,
        name: 'Luna',
        phone: "33 3363944",
        email: "luna@gmail.com",
        website: 'www.luna.com'
    }
]

//exercicio 4
app.get("/users", (req, res) => {
    res.send(users).status(200);
})

//exercicio 5, 6 e 7
type Post = {
    id: number,
    title: string,
    body: string,
    userId: number,

}
const posts: Post[] = [
    {
        id: 1,
        title: 'Margaridas',
        body: "Margaridas são amarelas",
        userId: 1
    },
    {
        id: 2,
        title: 'Rosas',
        body: "Rosas são vermelhas",
        userId: 6
    },
    {
        id: 3,
        title: 'Violetas',
        body: "Violetas são azuis",
        userId: 5
    }
]

app.get("/posts", (req, res) => {
    res.send(posts).status(200);
})

//Resposta 6 - Na minha opinião achei melhor criar fora do array de usuarios fica mais organizado
// e mais fácil de entender que existe um array de usuario e um array de posts.

// exercicio 8
app.get("/posts/:id", (req, res) => {
    if (req.params.id) {
        const post = posts.find((post) => post.id === Number(req.params.id));
        if (post) {
            res.send(post).status(200);
        } else {
            res.status(404).send("Não é possível realizar a operação. ID ausente")
        }
    }
})