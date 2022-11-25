const conta = {
    email: 'gabriel.matuk@eteg.com.br',
    password: '123456',
    name:'API - EXAMPLE',
    balance: 2000.00,
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    },2000)
})