import "./Card.css"

export const Card = ({
  name,
  description,
  imageSrc,
}) => {
  const modifier = !imageSrc ? ' --empty' : ''
  return (
    <div className={`card${modifier}`}>
      {/* <h2>{name}</h2> */}
      {imageSrc && 
        <div className="card__background-wrapper">
          <img
            className="card__background"
            src={imageSrc}
          />
        </div>
      }
      {/* <p>{description}</p> */}
    </div>
  )
}
