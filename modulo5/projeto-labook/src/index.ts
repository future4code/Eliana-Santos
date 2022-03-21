import { app } from './controller/app'
import { postRouter } from './routes/postRouter'
import { useRouter } from './routes/userRouter'


app.use('/users', useRouter)
app.use('/posts', postRouter)