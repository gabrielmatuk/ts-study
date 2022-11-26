import React from 'react'

interface IAppContext  {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
  }
  
  export const AppContext = React.createContext({} as IAppContext);
  
  export const AppContextProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

    const user = 'Gbriel'
    return(
      <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }