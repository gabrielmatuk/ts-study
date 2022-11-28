import { UserService } from "./UserService"
import * as jwt from 'jsonwebtoken'

jest.mock('../repositories/UserRepository')
jest.mock('../database', ()=> {
    initialize: jest.fn()
})
jest.mock('jsonwebtoken')
const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
    const userService = new UserService(mockUserRepository);
    const mockUser = {
        user_id: '123', name: 'test', email: 'test@test.com', password:'123' }
    
    it('Deve adicionar um novo usuário', async() => {
        mockUserRepository.createUser = jest.fn().mockImplementation(()=> Promise.resolve(mockUser))
        const res = await userService.createUser('test', 'test@test.com', '123')
        expect(mockUserRepository.createUser).toHaveBeenCalled();
        expect(res).toMatchObject({
            user_id: '123', name: 'test', email: 'test@test.com', password:'123'
        })
    })
    
    it('Devo retornar um token de usuário', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(()=> Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('test@test.com', '123')
        expect(token).toBe('token')
    })

    it('Deve retornar um erro, caso não encontre um usuário', async() => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(()=> Promise.resolve(null))
        await expect(userService.getToken('invalid@invalid.com', '123456')).rejects.toThrowError(new Error('email/password mismatch.'))
    })
})