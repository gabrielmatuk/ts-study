import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    createUser =(req:Request, res: Response) => {
        const userService = new UserService()
        if( !req.body || !req.body.email || !req.body.name ){
            return res.status(400).json({error: "missing params on create user"})
        }
        const { name, email } = req.body
        userService.createUser(name, email)
        return res.status(200).json({msg: true})
    }
    getAllUsers = (_: Request, res:Response) =>{
        const userService = new UserService()
        const users = userService.getAllUsers()
        return res.status(200).json(users)
    }
}