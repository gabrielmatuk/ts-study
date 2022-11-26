import { Box } from '@chakra-ui/react'


export const Card = ({children}: any) => {
  return (
    <Box backgroundColor='#fafafa' borderRadius='25px' padding='15px' >
    {children}
    </Box>
  )
}

export default Card