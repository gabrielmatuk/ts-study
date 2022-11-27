import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const appBank = {
    login: false
}

describe('storage', ()=>{
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no localStorage com a chave appbank', ()=>{
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('appbank')
    })

    it('Deve criar o objeto no localStorage',()=> {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('appbank', JSON.stringify(appBank))
    })

    it('Deve alterar o valor do objeto no localStorage',()=> {
        changeLocalStorage(appBank)
        expect(mockSetItem).toHaveBeenCalledWith('appbank', JSON.stringify(appBank))
    })
})