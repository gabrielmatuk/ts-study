import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import {Request} from 'express'


describe('User Controller', () => { 
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService)

    it('Deve adicionar um novo usuário', () => {
        const mockRequest  = {body: {
            name: 'Test',
            email: 'test@test.com'
        }} as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({msg: true})
    })
 })