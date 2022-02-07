import axios from "axios";
import { baseURL } from "./baseURL";
import { User } from "./ex3";

// 5
const sendNotifications = async (
    users: User[],
    message: string
): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            });
        }
        
        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
};
const main = async (users: User[], message: string): Promise<void> => {
    try {
        await sendNotifications(users, message)
    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}


const users: User[] = [{
      id: "4188567e-27c6-446c-8b4e-1bb1b92b6292",
      name:'',
      email:''
}]

main(users,'seu nariz é grande')
