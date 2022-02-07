import axios from "axios";
import { baseURL } from "./baseURL";

//Exercicio 1a -
// endpoit GET
// b- Indicamos o tipo de uma função assíncrona que retorna um array de qualquer coisa dessa forma Promisse<any[]> colocando os
//colchetes que representam um array. 
//c-
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

const main = async (): Promise<void> => {
    try {
        await getSubscribers()
    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}

main()