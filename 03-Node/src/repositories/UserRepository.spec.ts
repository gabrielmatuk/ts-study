import { EntityManager } from "typeorm"
import { User } from "../entities/User"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from "./UserRepository"

describe('UserRepository', () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser:User ={
        user_id: '12345',
        name:'Teste',
        email:'teste@test.com',
        password: 'senha'
    } 

    beforeAll(async () => {
        managerMock = await getMockEntityManager({
            saveReturn: mockUser
        })
        userRepository = new UserRepository(managerMock as EntityManager)
    })

    it('Deve cadastrar um novo usuário no banco de dados', async()=>{
        const res = await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
        expect(res).toMatchObject(mockUser)
    })
})