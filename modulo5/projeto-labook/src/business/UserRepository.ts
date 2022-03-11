import Post, { POST_TYPES } from "../model/Post"
import User from "../model/User"

export interface UserRepository {
    insert(user: User): Promise<User>
    findByEmail(email: string): Promise<User | null>
    createPost(post: Post): Promise<Post>
    getPostById(
        id: string,
        photo: string,
        description: string,
        type: POST_TYPES,
        creatAt: Date): Promise<Post | null>
}

