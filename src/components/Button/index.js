import './Button.css'

export const Button = ({
  className: cls,
  ...props
}) => (
  <button
    className={`button${cls ? ` ${cls}` : ''}`}
    {...props}
  >

  </button>
)