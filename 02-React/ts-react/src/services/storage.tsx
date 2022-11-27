interface IAppBank {
    login: boolean;
}

const appBank = {
    login: false
}

export const getAllLocalStorage = () => {
    return localStorage.getItem('appbank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('appbank', JSON.stringify(appBank))
}

export const changeLocalStorage = (appBank: IAppBank):void =>{
    localStorage.setItem('appbank', JSON.stringify(appBank))
    
}