import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

export const verifyAuth = (req:Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization
    if(!authToken){
        return res.status(401).json({error: "missing auth key"})

    }

    if(authToken){
        const[, token] = authToken.split(' ')
        try{
            const {sub} = verify(token, '123456789')
            console.log('Token for user', sub)
            return next
        }catch(e){
            return res.status(401).json({msg: 'unauthorized'})
        }
    }
}