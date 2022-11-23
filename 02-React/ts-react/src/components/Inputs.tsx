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
    <input id={id} type={type}/>
    </div>
    </>
  
  )
}

export default Inputs