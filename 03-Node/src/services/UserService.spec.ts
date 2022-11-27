import { UserService } from "./UserService"

jest.mock('../repositories/UserRepository')
jest.mock('../database', ()=> {
    initialize: jest.fn()
})
const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
    const userService = new UserService(mockUserRepository);
    it('Deve adicionar um novo usuário', async() => {
        mockUserRepository.createUser = jest.fn().mockImplementation(()=> Promise.resolve({
            id_user: '123', name: 'test', email: 'test@test.com', password:'123'
        }))
        const res = await userService.createUser('test', 'test@test.com', '123')
        expect(mockUserRepository.createUser).toHaveBeenCalled();
        expect(res).toMatchObject({
            id_user: '123', name: 'test', email: 'test@test.com', password:'123'
        })
    })
})