import './Button.scss'

export const Button = ({
  className: cls,
  ...props
}) => (
  <div>
    <button
      className={`button${cls ? ` ${cls}` : ''}`}
      {...props}
    />
  </div>
)