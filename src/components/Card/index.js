import "./Card.css"

export const Card = ({
  name,
  description,
  imageSrc,
  children
}) => {
  const modifier = !imageSrc ? ' --empty' : ''
  return (
    <div className={`card${modifier}`}>
      {imageSrc && 
        <div className="card__background-wrapper">
          <img
            className="card__background"
            src={imageSrc}
            alt="card-background"
          />
        </div>
      }
     <div className={`card__content${modifier}`}>
      {children}
    </div>
    </div>
  )
}
