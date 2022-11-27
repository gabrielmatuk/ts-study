import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import {Request} from 'express'

const mockUserService = {
    createUser: jest.fn()
}

jest.mock('../services/UserService', ()=> {
    return {
        UserService: jest.fn().mockImplementation(()=>{
            return mockUserService
        })
    }
})

describe('User Controller', () => { 

    
    const userController = new UserController()
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário', () => {
        const mockRequest  = {body: {
            name: 'Test',
            email: 'test@test.com',
            password: 'password'
        }} as Request
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({msg: true})
    })

    it('Deve deletar um usuário', () => {
        const mockRequest  = {body: {
            name: 'Test',
            email: '',
            password: 'password'

        }} as Request
        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({msg: 'user deleted'})
    })

    it('Deve retornar um erro quando usuário não informa o email', () => {
        const mockRequest  = {body: {
            name: 'Test',
            email: '',
            password: 'password'
        }} as Request
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({error: 'missing params on create user'})
    })

    it('Deve retornar um erro quando usuário não informa o password', () => {
        const mockRequest  = {body: {
            name: 'Test',
            email: 'test@email.com',
            password: ''
        }} as Request
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({error: 'missing params on create user'})
    })

    it('Deve retornar um erro quando usuário não informa o name', () => {
        const mockRequest  = {body: {
            name: '',
            email: 'test@email.com',
            password: 'password'
        }} as Request
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({error: 'missing params on create user'})
    })

 })