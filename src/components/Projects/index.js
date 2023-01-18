import { forwardRef } from "react"
import Carousel from "react-material-ui-carousel"
import { Button } from "../Button"
import { Link } from "../Link"
import "./Projects.css"

export const Projects = forwardRef((
  props,
  ref
) => {

  const items = [
    {
      name: "Trains search",
      description: "Web app for searching trains in Finland. You can see the departing and arriving trains for each station. Using API by Digitraffic.",
      link: "https://sameshostee.com/Junanhakusivu.html",
      target: null,
    },
    {
      name: "Thesis",
      description: "Hello World!",
      link: "https://urn.fi/URN:NBN:fi:amk-2020091620484",
      target: "_blank"
    },
    {
      name: "3rd",
      description: "aaa",
      link: null,
      target: null,
    },
    {
      name: "4th",
      description: "bbbb",
      link: null,
      target: null,
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
        items.map( (item, i, link, target) => <Item key={i} item={item} link={link} target={target}/> )
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
          {props.item.link && (
            <Link 
              className="projects__open-link"
              href={props.item.link}
              target={props.item.target && props.item.target}
            >
              <Button className="projects__open-button">
                Open
              </Button>
            </Link>
            )
          }
        </div>
      </div>
    )
}