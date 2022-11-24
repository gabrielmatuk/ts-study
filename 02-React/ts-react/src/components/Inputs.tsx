import {Input} from '@chakra-ui/react'
interface IInputs  {
    label: string,
    htmlFor?: string,
    id:string
    type?: string
    placeholder: string
}

export const Inputs = ( {id, label, htmlFor, type, placeholder}: IInputs) => {
  return (
    <>
    <div>
    <label htmlFor={htmlFor}>
        {label}
    </label>
    <Input id={id} type={type} placeholder={placeholder}></Input>
    </div>
    </>
  
  )
}

export default Inputs