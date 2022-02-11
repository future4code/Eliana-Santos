import axios from "axios";
import { baseURL } from "./baseURL";

//2a A chamada para a função é a mesma e o resultado também, não existe diferença entre o resultado somente a forma com é 
// escrito o código.

// 2b
const getSubscribers = async (): Promise<any[]> => {
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