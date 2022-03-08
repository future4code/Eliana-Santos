import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types";

export class Authenticator {
    GenerateToken = (
        payload: AuthenticationData
    ) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "1min"
            }
        );
    }

    GetTokenData = (
        token: string
    ) => {
        try{
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticationData
            return tokenData
        }catch (error){
            console.log(error)
            return null
        }
    }
}