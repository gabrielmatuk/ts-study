const conta = {
    id: '1',
    email: 'gabriel@matuk.com.br',
    password: '123456',
    name:'Gabriel',
    balance: 2000.00,
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    },2000)
})