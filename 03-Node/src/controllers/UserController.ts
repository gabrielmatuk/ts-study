import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }
    
    createUser =(req:Request, res: Response) => {
        if( !req.body || !req.body.email || !req.body.name ){
            return res.status(400).json({error: "missing params on create user"})
        }
        const { name, email } = req.body
        this.userService.createUser(name, email)
        return res.status(200).json({msg: true})
    }
    getAllUsers = (_: Request, res:Response) =>{
        const users = this.userService.getAllUsers()
        return res.status(200).json(users)
    }
}