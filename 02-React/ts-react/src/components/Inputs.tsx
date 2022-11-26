import {Input} from '@chakra-ui/react'
import React from 'react'

interface IInputs  {
    htmlFor?: string,
    id:string
    type?: string
    placeholder: string
}


export const Inputs = ( {id, htmlFor, type, placeholder, }: IInputs) => {
  const [password, setpassword] = React.useState('')
  return (
    <>
    <div>
    <label htmlFor={htmlFor}>
    </label>
    <Input id={id} type={type} placeholder={placeholder} value={password} onChange={(event) => {setpassword(event.target.value)}}></Input>
    </div>
    </>
  
  )
}



export default Inputs