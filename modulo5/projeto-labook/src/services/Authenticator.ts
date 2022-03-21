import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/User"
import dotenv from 'dotenv'

dotenv.config()
export class Authenticator {

  generateToken = (payload: AuthenticationData): string => {
    return jwt.sign(
      { id: payload.id },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.EXPIRES_IN
      })
  }

  getTokenData = (token: string): AuthenticationData => {
    const result: any = jwt.verify(
      token,
      process.env.JWT_KEY as string
    )

    return { id: result.id, }
  }

}