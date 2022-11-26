import { login } from "./login";

describe('login', ()=> {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'gabriel@matuk.com.br'

    it('Verificar se vamos ser logados e redirecionados', async()=>{
        const res = await login(mockEmail)
        expect(res).toBeTruthy()
    })

    it('Verificar se não vamos ser logados e redirecionados', async()=> {
        const res = await login('gabrielkk@teste.com')
        expect(res).toBeFalsy()
    })
})

