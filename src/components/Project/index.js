import "./Project.scss"
import { Button } from "../Button"
import { Link } from "../Link"
import { Card } from "../Card"

export const Project = ({
  ...props
}) => {
  const { name, description, link, target, imageSrc } = props.item
  return (
    <div className="project__item">
      <Card
        name={name}
        description={description}
        imageSrc={imageSrc}
      >
        {name && (
          <div className="project__title-container">
            <h2 className="project__title-text">
              {name}
            </h2>
          </div>)
        }
        {description && (
          <div className="project__description-container">
            <h2 className="project__description-text">
              {description}
            </h2>
          </div>)
        }
      </Card>
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
