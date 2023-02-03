import './Button.css'

export const Button = ({
  className: cls,
  ...props
}) => (
  <div>
    <button
      className={`button${cls ? ` ${cls}` : ''}`}
      {...props}
    >

    </button>
  </div>
)