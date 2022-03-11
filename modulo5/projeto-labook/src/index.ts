import { app } from './controller/app'
import { postRouter } from './routes/postRouter'
import { useRouter } from './routes/userRouter'


app.use('/user', useRouter)
app.use('/post', postRouter)