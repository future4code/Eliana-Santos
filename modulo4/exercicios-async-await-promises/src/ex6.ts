import axios from "axios";
import { baseURL } from "./baseURL";
import { User } from "./ex3";

//Exercicio 6 
// 6a - Esse método recebe um array de Promises e retorna outra Promise, que resolve em um array de respostas

const sendNotifications = async (
  users: User[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${baseURL}/notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};

