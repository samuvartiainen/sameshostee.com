import { useEffect, useRef, useState } from "react"
import { addWordPositionsToHobbies } from "../../utils/addPositions"
import { Word } from "../Word"
import "./Banner.scss"

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
      title: "cryptocurrencies",
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
  const minHeight = 70
  const ref = useRef(null)
  const [maxHeight, setHeight] = useState(100)
  const [maxWidth, setWidth] = useState(100)
  const [allHobbies, setAllHobbies] = useState(null)
  const [wordsLoading, setWordsLoading] = useState(true)
  
  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        setHeight(ref.current.clientHeight)
        setWidth(ref.current.clientWidth - 150)
      }, 1000)
    }
  }, [isMobile])
 
  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        setWordsLoading(false)
      }, 2500)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        setAllHobbies(addWordPositionsToHobbies(minHeight, maxHeight, minWidth, maxWidth, hobbies))
      }, 1000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, maxHeight, maxWidth])
  
  useEffect(() => {
    function handleResize() {
      if (!isMobile) {
        setTimeout(() => {
          if (ref.current) {
            setHeight(ref.current.clientHeight)
          }
        }, 1000)
      }
      if (!isMobile) {
        setTimeout(() => {
          if (ref.current) {
            setWidth(ref.current.clientWidth - 150)
          }
        }, 1000)
      }
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    isMobile ? 
      <div className="banner">
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
                hidden={wordsLoading}
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
