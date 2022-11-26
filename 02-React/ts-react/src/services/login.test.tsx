import { Login } from "./login";

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react',() => ({
    ...jest.requireActual('react'),
    useContext:() => ({
        isLoggedIn: true,
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom',()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('login', ()=> {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'gabriel@matuk.com.br'

    it('Verificar se vamos ser logados e redirecionados', async()=>{
        await Login(mockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Verificar se não vamos ser logados e redirecionados', async()=> {
        await Login('gabrielkk@teste.com')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalledWith()
    })
})

