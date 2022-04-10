import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { menuRouter } from "./router/menuRouter";
import { orderRouter } from "./router/orderRouter";
import dotenv from "dotenv";

dotenv.config();


const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/pizzas", menuRouter);
app.use("/orders", orderRouter);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
