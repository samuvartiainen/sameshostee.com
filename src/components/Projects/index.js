import { forwardRef } from "react"
import Carousel from "react-material-ui-carousel"
import { Button } from "../Button"
import { Link } from "../Link"
import { Project } from "../Project"
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
      imageSrc: './train.jpg'
    },
    {
      name: "Thesis",
      description: "Hello World!",
      link: "https://urn.fi/URN:NBN:fi:amk-2020091620484",
      target: "_blank"
    },
    {
      name: "Tetris",
      description: "Game I made on Unity",
      link: null,
      target: null,
      imageSrc: './tetris.jpg'
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
        className="projects__carousel"
        indicatorContainerProps={{
          style: {
            marginTop: '80px',
            marginBottom: '20px',
            background: "#374BAA",
            display: "flex",
            justifyContent: "center",
          }
        }}
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: '#374BAA',
            borderRadius: "0.5rem"
          }
        }} 
        navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            height: "300px",
          }
        }} 
        navButtonsAlwaysVisible={true}
        autoPlay={false} interval={10000}>
        {items.map((item, i) => (
          <Project
            key={i} 
            item={item}
          />
        ))}
      </Carousel>
    </div>
  )
})
