import axios from "axios";
import { baseURL } from "./baseURL";

export type User = {
    id: string;
    name: string;
    email: string;
}
//3a - Não teremos nenhum erro de tipagem. mas é aconselhável colocar 
const getSubscribers = async (): Promise<User[]> => {
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
//3b - Sim, pois é paara passar o retorno garantido de uma forma que não se perca. 
//3c
// const getSubscribers = async (): Promise<User[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data.map((res: any) => {
//         return {
//             id: res.id,
//             name: res.name,
//             email: res.email,
//         };
//     });
// };
// const main = async (): Promise<void> => {
//     try {
//         await getSubscribers()
//     } catch (err: any) {
//         console.log(err.response?.data || err.message)
//     }
// }

// main()