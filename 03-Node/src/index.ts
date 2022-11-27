import express, { Response} from 'express';
import { router } from './routes';
import 'reflect-metadata'
import { AppDataSource } from './database';

const app = express()
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    
app.use(express.json())
app.use(router)

const PORT = 5555


app.get('/', (_, res: Response) => {
    return res.status(200).json({msg: true})
})


app.listen(PORT, () => {
console.log(`Server Started at port ${PORT}.`)
})