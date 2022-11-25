import { Box } from "@chakra-ui/react"
import {Header} from "./Header/Header"

export const Layout = ({children} : any) => {
  return (
    <Box minHeight='100vh' backgroundColor='#4d4d4d'>
    <Header/>
    { children }
    </Box>

    )
}

export default Layout