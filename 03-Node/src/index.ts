import express, {Request, Response} from 'express';

const app = express()
app.use(express.json())

const PORT = 5555

app.get('/', (_, res: Response) => {
    return res.status(200).json({msg: true})
})

app.post('/', (req:Request, res: Response) => {
    const body = req.body
    return res.status(200).json({msg: true})
})

app.listen(PORT, () => {
console.log('Server Started.')
})