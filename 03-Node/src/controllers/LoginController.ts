import {Request, response, Response} from 'express';
import { sign } from 'jsonwebtoken'
import { UserService } from '../services/UserService';


export class LoginController {
    userService: UserService


    constructor(userService = new UserService){
        this.userService = userService
    }

    login = async(req: Request, res:Response) =>{
        if( !req.body || !req.body.email || !req.body.password ){
            return res.status(400).json({error: "missing params to login"})
        }
        try{
            const { email, password } = req.body

            const token = await this.userService.getToken(email, password)  
          
            
            return res.status(200).json({token})
        }catch(e){
            return response.status(500).json(`email/pswd mismatch. error message: ${e}`)
        }

    }
}