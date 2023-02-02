import { useEffect, useRef, useState } from "react"
import { Word } from "../Word"
import "./Banner.css"

const randomInteger = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const addPositions = (counter, protection, minHeight, maxHeight, minWidth, maxWidth, hobbies) => {
  const positions = []
  while (positions.length < 9 && counter < protection) {
    let overlapping = false
    let position = {
      top: randomInteger(minHeight, maxHeight),
      left: randomInteger(minWidth, maxWidth)
    }
    for (let j = 0; j < positions.length; j++) {
      const existing = positions[j]
      const diffLeft = Math.abs(existing.left - position.left)
      const diffTop = Math.abs(existing.top - position.top)
      const notEnoughDiffLeft = diffLeft < 125
      const notEnoughDiffTop = diffTop < 50
      if (notEnoughDiffLeft && notEnoughDiffTop) {
        overlapping = true
        break
      }
    }
    if (!overlapping) {
      positions.push(position)
      hobbies[positions.length-1].top = position.top
      hobbies[positions.length-1].left = position.left
    }
    counter++
  }

  return hobbies
}

export const Banner = ({
  device
}) => {
  const hobbiesTech = [
    {
      title: "coding",
    },
    {
      title: "JavaScript",
    },
    {
      title: "React",
    },
    {
      title: "cryptocurrency",
    }
  ]
  const hobbiesOther = [
    {
      title: "coffee",
    },
    {
      title: "mint tea",
    },
    {
      title: "books",
    },
    {
      title: "ice hockey",
    },
    {
      title: "jogging",
    }
  ]
  const isMobile = device === 'mobile'
  const hobbies = hobbiesTech.concat(hobbiesOther)
  const minWidth = 0
  const minHeight = 100
  const ref = useRef(null);
  const [maxHeight, setHeight] = useState(100)
  const [maxWidth, setWidth] = useState(100)
  const [allHobbies, setAllHobbies] = useState(null)
  
  let counter = 0
  const protection = 5000
  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        setHeight(ref.current.clientHeight)
      }, 1000)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        setWidth(ref.current.clientWidth - 150)
      }, 1000)
    }
  }, [isMobile])

 
  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
      setAllHobbies(addPositions(counter, protection, minHeight, maxHeight, minWidth, maxWidth, hobbies))
    }, 1000)
    }
  }, [isMobile, maxHeight, maxWidth])
  
  return (
    isMobile ? 
      <div className="banner-mobile">
        <div>
          {hobbiesTech.map((hobby) => (
            <Word key={hobby.title}>{hobby.title}</Word>
          ))}
        </div>
        <img className="banner__image-mobile" alt="sameshostee-programmer" src="./programmer.jpg"></img>
        {isMobile && (
        <div>
          {hobbiesOther.map((hobby) => (
            <Word key={hobby.title}>{hobby.title}</Word>
          ))}
        </div>)}
      </div> : (
         <div className="banner">
          <div ref={ref} className="banner__words-container">
            {allHobbies && allHobbies.map((hobby) => (
              <Word
                key={hobby.title}
                positionAbsolute={true}
                top={hobby.top}
                left={hobby.left}
              >
                {hobby.title}
              </Word>
            ))}
              </div>
            <img className="banner__image" alt="sameshostee-programmer" src="./programmer.jpg"></img>
        </div>
      )
  )
}
