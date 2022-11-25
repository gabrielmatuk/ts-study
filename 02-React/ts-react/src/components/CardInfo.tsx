import { Box } from '@chakra-ui/react'

interface ICardInfo {
    text: string;
}

const CardInfo = ({text}: ICardInfo) => {
  return (
    <Box 
    backgroundColor='#fafafa' 
    minHeight='25vh' width={320} 
    padding={8}
    borderRadius="25px"
    >
    {text}
    </Box>  
    );
}

export default CardInfo