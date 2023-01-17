import { forwardRef } from "react"
import Carousel from "react-material-ui-carousel"
import { Button } from "../Button"
import "./Projects.css"

export const Projects = forwardRef((
  props,
  ref
) => {

  const items = [
    {
        name: "Trains search",
        description: "Web app for searching trains in Finland. You can see the departing and arriving trains for each station. Using API by Digitraffic."
    },
    {
        name: "Thesis",
        description: "Hello World!"
    },
    {
      name: "3rd",
      description: "aaa"
    },
    {
        name: "4th",
        description: "bbbb"
    }
]


  return (
    <div className="projects" ref={ref}>
      <div className="projects__text-container">
        <h1 className="projects__text">
          My projects
        </h1>
      </div>
      <Carousel
      indicatorContainerProps={{
        style: {
            marginTop: '20px',
            marginBottom: '20px',
            background: "#374BAA",
        }
      }}
      navButtonsAlwaysVisible={true}
      autoPlay={false} interval={10000}>
      {
        items.map( (item, i) => <Item key={i} item={item} /> )
      }
      </Carousel>
    </div>
  )
})

function Item(props)
{
    return (
      <div className="projects__item">
        <h2>{props.item.name}</h2>
        <div>
          <img
            src="logo192.png"
          />
        </div>
        <p>{props.item.description}</p>
        <div className="projects__button-container">
          <Button className="projects__open-button">
            Open
          </Button>
        </div>
      </div>
    )
}