interface ICard {
    id:number,
    paragraph: string,
    details: string
}

export const Card = ({id, paragraph, details}: ICard) => {

    console.log(id)
  return (
    <div>
        <h1> Componente card {id} </h1>
        <p>{paragraph}, {details}</p>
    </div>
  )
}

export default Card