import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()

app.use(express.json())
app.use(cors())

const serve = app.listen(process.env.PORT || 3003, () => {
    if (serve) {
        const address = serve.address() as AddressInfo;
        console.log(`Serve is running in http://${address.port}`)
    } else {
        console.error('Failure upon starting serve.')
    }
})

export default app