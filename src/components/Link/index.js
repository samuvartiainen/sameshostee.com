export const Link = ({
  class: cls,
  href,
  ...props
}) => {
  return (
    <a href={href} {...props} />
  )
}