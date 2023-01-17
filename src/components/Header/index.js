import { Button } from "../Button"
import "./Header.css"

export const Header = ({
  projectsRef,
}) => {
  const executeScroll = () => projectsRef.current.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start',
  })

  return (
    <header className="header">
      <div className="header__navbar-content">
        <div className="header__text-container">
          <h1 className="header__site-name">
            Sameshostee
          </h1>
        </div>
        <div className="header__social-links">
          <Button
            onClick={
              executeScroll
            }
            className="header__my-projects-button"
          >
            My projects
          </Button>
        </div>
      </div>
      <div className="header__banner-content">

      </div>
    </header>
  )
}
