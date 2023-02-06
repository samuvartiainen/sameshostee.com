import { forwardRef } from "react"
import Carousel from "react-material-ui-carousel"
import { Project } from "../Project"
import "./Projects.css"

export const Projects = forwardRef((
  props,
  ref,
) => {
  const { device } = props
  let shownItems = device === 'mobile' ? 1 : device === 'tablet' ? 2 : 3
  const projects = [
    {
      name: "Trains search",
      description: "Web app for searching trains in Finland. You can see the departing and arriving trains for each station. Using API by Digitraffic.",
      link: "https://sameshostee.com/junanhakusivu.html",
      target: null,
      imageSrc: './images/train.jpg'
    },
    {
      name: "Thesis",
      description: "Sensor data project",
      link: "https://urn.fi/URN:NBN:fi:amk-2020091620484",
      imageSrc: './images/thesis.jpg',
      target: "_blank"
    },
    {
      name: "Tetris",
      description: "Game I made with Unity",
      link: "https://sameshostee.com/tetrisgame.html",
      target: null,
      imageSrc: './images/tetris.jpg'
    },
    {
      name: "File converter",
      description: "Csv <-> Xlsx converter",
      link: "https://sameshostee.com/CsvToXlsxConverter.html",
      target: null,
      imageSrc: './images/files.jpg'
    },
  ]

  const items = []
  const sliderItems = projects.length > shownItems ? shownItems : projects.length
  for (let i = 0; i < projects.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <div key={i} className="projects__project-container">
          {projects.slice(i, i + sliderItems).map((da, index) => {
            return (<Project
              key={index} 
              item={da}
            />)
          })}
        </div>
      )
    }
  }

  return (
    <div className="projects" ref={ref}>
      <div className="projects__text-container">
        <h2 className="projects__text">
          My projects
        </h2>
      </div>
      <Carousel
        className="projects__carousel"
        indicatorContainerProps={{
          style: {
            marginTop: '9rem',
            marginBottom: '20px',
            background: "#374BAA",
            display: "flex",
            justifyContent: "center",
          }
        }}
        indicatorIconButtonProps={{
          style: {
            color: 'grey',
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'white',
          }
        }}
        navButtonsWrapperProps={{
          style: {
            height: "300px",
            overflow: "visible",
            width: "15%",
          },
        }}
        navButtonsProps={{
          style: {
            background: "grey",
            marginLeft: device === "mobile" ? "2px" : "20px",
            marginRight: device === "mobile" ? "2px" : "20px",
            border: "2px solid #000",
            boxShadow: "1.5px 2px 0px 0.5px #000",
            height: "35px",
            width: "35px",
            borderRadius: "0.5rem"
          },
        }}
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        interval={10000}
      >
        {items}
      </Carousel>
    </div>
  )
})
