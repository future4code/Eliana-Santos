import { UserRepository } from "../business/UserRepository";
import Post from "../model/Post";
import BaseDatabase from "./BaseDatabase";

export default class PostDataBase extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = "labook_posts"

    createPost = async (post: Post) => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(post)
            return post
        } catch (error) {
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    getPostById = async (email: string) => {
        try {
            const queryResult: Post[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select("*")
                .where({ email })

            return queryResult.length ? queryResult[0] : null
        } catch (error) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }

}