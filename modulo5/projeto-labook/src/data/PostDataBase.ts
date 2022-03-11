import { PostRepository } from "../business/PostRepository";
import Post from "../model/Post";
import BaseDatabase from "./BaseDatabase";
export default class PostDataBase extends BaseDatabase implements PostRepository {
    protected TABLE_NAME = "labook_posts"

    createPost = async (post: Post) => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.types,
                    createAt: post.createAt,
                    authorId: post.authorId
                })
            return post
        } catch (error) {
            throw new Error("Erro ao criar post no banco de dados")
        }
    }

    getPostById = async (id: string,) => {
        try {
            const queryResult: Post[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select('id', 'photo', 'description', 'createAt', 'type')
                .where({ id })
            return queryResult
        } catch (error) {
            throw new Error("Erro ao buscar post no banco")
        }
    }

} 