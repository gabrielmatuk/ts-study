import {Input} from '@chakra-ui/react'
import React from 'react'

interface IInputs  {
    label: string,
    htmlFor?: string,
    id:string
    type?: string
    placeholder: string
}


export const InputsPassword = ( {id, label, htmlFor, type, placeholder, }: IInputs) => {
  const [password, setpassword] = React.useState('')
  return (
    <>
    <div>
    <label htmlFor={htmlFor}>
        {label}
    </label>
    <Input id={id} type={type} placeholder={placeholder} value={password} onChange={(event) => {setpassword(event.target.value)}}></Input>
    </div>
    </>
  
  )
}

export const InputsEmail = ( {id, label, htmlFor, type, placeholder}: IInputs) => {
  const [email, setEmail] = React.useState('')

  return (
    <>
    <div>
    <label htmlFor={htmlFor}>
        {label}
    </label>
    <Input id={id} type={type} placeholder={placeholder} value={email} onChange={(event) => {setEmail(event.target.value)}}></Input>
    </div>
    </>
  
  )
}

const Inputs = {
  InputsEmail,
  InputsPassword
}
export default Inputs