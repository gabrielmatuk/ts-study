import express, { Response} from 'express';
import { router } from './routes';
import 'reflect-metadata'

const app = express()


app.use(express.json())
app.use(router)

const PORT = 5555


app.all('*', (_, res: Response) => {
    return res.status(404).send('Invalid endpoint.')
})


app.listen(PORT, () => {
console.log(`Server Started at port ${PORT}.`)
})