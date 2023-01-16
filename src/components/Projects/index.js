import { Button, Paper } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { Link } from "../Link"
import "./Projects.css"
export const Projects = ({
  class: cls,
  href,
  ...props
}) => {

  const items = [
    {
        name: "Trains search",
        description: "Web app for searching trains in Finland. You can see the departing and arriving trains for each station. Using API by Digitraffic."
    },
    {
        name: "Thesis",
        description: "Hello World!"
    }
]


  return (
    <div className="projects">
      <div className="projects__text-container">
        <h1>My projects</h1>
      </div>
      <Carousel
      indicatorContainerProps={{
        style: {
            marginTop: '50px', // 5
            background: "lightblue",
        }
      }}
      
      autoPlay={false} interval={10000}>
      {
        items.map( (item, i) => <Item key={i} item={item} /> )
      }
      </Carousel>
    </div>
  )
}

function Item(props)
{
    return (
        <Paper className="projects__example">
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <img
            src="logo192.png"
          />
          <Button className="CheckButton">
              Open
          </Button>
        </Paper>
    )
}