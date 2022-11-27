import React from 'react'
import { getAllLocalStorage} from '../services/storage';

interface IAppContext  {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
  }
  
  export const AppContext = React.createContext({} as IAppContext);
  
  export const AppContextProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

    const storage = getAllLocalStorage()
    
    React.useEffect(()=>{
      if(storage){
        const { login }= JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [storage])


    return(
      <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }