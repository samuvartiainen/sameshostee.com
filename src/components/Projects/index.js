import { Link } from "../Link"
import "./Projects.css"
export const Projects = ({
  class: cls,
  href,
  ...props
}) => {
  return (
    <div className="projects">
      <div className="projects__text-container">
        <h1>My projects</h1>
      </div>
      <div className="projects__content-container">
        <Link href="junanhakusivu">open</Link>
      </div>
    </div>
  )
}
