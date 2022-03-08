import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../types/User";
import dotenv from 'dotenv'

dotenv.config()

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    generateToken(input: AuthenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.BCRYPT_COST,
        })
        return token;
    }
    getTokenData = (token: string): AuthenticationData => {
        try {
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as jwt.JwtPayload

            return {
                id: tokenData.id as string,
                role: tokenData.role
            }
        } catch (error: any) {
            console.log(error)
            return(error.message)
        }
    }
}