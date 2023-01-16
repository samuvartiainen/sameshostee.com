import "./Header.css"
import { GithubSvg } from "../svgs/GithubSvg.js"
import { Link } from "../Link"
import { LinkedinSvg } from "../svgs/LinkedinSvg"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__navbar-content">
        <div className="header__text-container">
          <h1 className="header__text">
            Sameshostee
          </h1>
        </div>
        <div className="header__social-links">
          <Link
            className="header__github-link"
            key="github"
            href="https://github.com/samuvartiainen"
            target="_blank"
          >
            <GithubSvg 
              className="header__github-svg"
            />
          </Link>
          <Link
            className="header__linkedin-link"
            key="linkedin"
            href="https://www.linkedin.com/in/samu-vartiainen/"
            target="_blank"
          >
            <LinkedinSvg 
              className="header__linkedin-svg"
            />
          </Link>
        </div>
      </div>
      <div className="header__banner-content">

      </div>
    </header>
  )
}
