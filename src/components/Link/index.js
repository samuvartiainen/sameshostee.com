export const Link = ({
  class: cls,
  href,
  ...props
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={href} {...props} />
  )
}