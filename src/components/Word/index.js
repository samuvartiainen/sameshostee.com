import "./Word.css"

export const Word = ({
  children,
  positionAbsolute,
  top,
  left
}) => {
  return (
    positionAbsolute ? (<p 
      style={{
        position: "absolute",
        display: "flex",
        top,
        left
      }}
      className="word">
    {children}</p>) : (<p
      className="word">
    {children}</p>)
  )
}
