import axios from "axios";
import { baseURL } from "./baseURL";

//4a É o tipo de função assíncrona nomeada 

//4b
async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseURL}/news`, {
    title: title,
    content: content,
    date: date
  });
}
const main = async (
  title: string,
  content: string,
  date: number): Promise<void> => {
  try {
    await createNews()
  } catch (err: any) {
    console.log(err.response?.data || err.message)
  }
}

main()
