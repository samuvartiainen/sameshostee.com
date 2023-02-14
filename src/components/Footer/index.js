import { useEffect, useState } from "react"
import { Link } from "../Link"
import { GithubSvg } from "../svgs/GithubSvg"
import { LinkedinSvg } from "../svgs/LinkedinSvg"
import "./Footer.css"

export const Footer = () => {
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setHidden(false)
    }, 500)
  })

  return (
    <footer className="footer">
      <div style={{visibility: hidden ? "hidden" : "visible"}}>
        <Link
          className="footer__github-link"
          key="github"
          href="https://github.com/samuvartiainen"
          target="_blank"
        >
          <GithubSvg
            className="footer__github-svg"
          />
        </Link>
        <Link
          className="footer__linkedin-link"
          key="linkedin"
          href="https://www.linkedin.com/in/samu-vartiainen/"
          target="_blank"
        >
          <LinkedinSvg
            className="footer__linkedin-svg"
          />
        </Link>
      </div>
    </footer>
  )
}
