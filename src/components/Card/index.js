import "./Card.css"

export const Card = ({
  name,
  description,
  imageSrc,
}) => {
  return (
    <div className="card">
      {/* <h2>{name}</h2> */}
      <div className="card__background-wrapper">
        <img
          className="card__background"
          src={imageSrc}
        />
      </div>
      {/* <p>{description}</p> */}
    </div>
  )
}
