import {Input} from '@chakra-ui/react'
interface IInputs  {
    label: string,
    htmlFor: string,
    id:string
    type?: string
}

export const Inputs = ( {id, label, htmlFor, type}: IInputs) => {
  return (
    <>
    <div>
    <label htmlFor={htmlFor}>
        {label}
    </label>
    <Input id={id} type={type}></Input>
    </div>
    </>
  
  )
}

export default Inputs