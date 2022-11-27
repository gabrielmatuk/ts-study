const db = [
    {
        name: 'Gabriel',
        email: 'gabriel@matuk.com.br'
    }
]

export class UserService {
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log('DB atualizado')
    }
    getAllUsers = () => {
        return db
    }
}