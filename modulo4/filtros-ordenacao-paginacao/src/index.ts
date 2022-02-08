import { app } from "./app";
import { filterUsers } from "./endpoints/filterUsers";
import {getAllUsers, } from "./endpoints/getAllUsers";
import { listagemUsers } from "./endpoints/listagemUsers";
import { orderUsers } from "./endpoints/orderUsers";

//app.get("/users", getAllUsers)
//app.get("/users", filterUsers)
//app.get("/users", orderUsers)
app.get("/users", listagemUsers)