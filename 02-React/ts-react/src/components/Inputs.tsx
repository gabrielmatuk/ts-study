interface IInputs  {
    label: string,
    htmlFor: string,
    id:string
}

export const Inputs = ( {id, label, htmlFor}: IInputs) => {
  return (
    <>
    <div>
    <label htmlFor={htmlFor}>
        {label}
    </label>
    <input id={id}/>
    </div>
    </>
  
  )
}

export default Inputs