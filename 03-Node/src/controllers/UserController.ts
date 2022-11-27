import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }
    
    createUser = (req:Request, res: Response) => {
        if( !req.body || !req.body.email || !req.body.name || !req.body.password ){
            return res.status(400).json({error: "missing params on create user"})
        }
        const { name, email, password } = req.body
        this.userService.createUser(name, email, password)
        return res.status(200).json({msg: true})
    }
    getUser = (req: Request, res:Response) => {
        if(!req.params || req.params.id) {
            return res.status(400).json({error: "missing params on create user"})
        }
        const {id} = req.params 
        this.userService.getUser(id)
        return res.status(200)
    }

    deleteUser = (req: Request, res:Response) => {
        const user = req.body
        return res.status(200).json({msg: 'user deleted'})
    }
}