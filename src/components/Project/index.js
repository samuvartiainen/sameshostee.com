import "./Project.css"
import { Button } from "../Button"
import { Link } from "../Link"
import { Card } from "../Card"

export const Project = ({
  ...props
}) => {
  const {name, description, link, target, imageSrc} = props.item
  return (
    <div className="project__item">
      <Card
        name={name}
        description={description}
        imageSrc={imageSrc}
      />
      <div className="project__button-container">
        {link && (
          <Link
            className="project__open-link"
            href={link}
            target={target}
          >
            <Button className="project__open-button">
              Open
            </Button>
          </Link>
          )
        }
      </div>
    </div>
  )
}
