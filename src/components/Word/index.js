import "./Word.scss"

export const Word = ({
  children,
  positionAbsolute,
  top,
  left,
  hidden
}) => {
  const display = hidden ? 'none' : 'flex'
  return (
    positionAbsolute ? (<p 
      style={{
        position: "absolute",
        display,
        top,
        left
      }}
      className="word">
    {children}</p>) : (<p
      className="word">
    {children}</p>)
  )
}
