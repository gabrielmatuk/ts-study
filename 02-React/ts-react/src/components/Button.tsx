import {Button}  from '@chakra-ui/react'
import { MouseEventHandler } from "react"

interface IDButton {
  onClick: MouseEventHandler
}

export const ButtonComponent = ({onClick}: IDButton) => {

  return (
    <>
    <Button onClick={onClick} size='lg' colorScheme='green' paddingTop='5px' marginTop='15px' width='25%' >Entrar</Button>
    </>
    )
}

export default Button