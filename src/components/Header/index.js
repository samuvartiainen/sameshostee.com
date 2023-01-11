import './Header.css'
import { GithubSvg } from '../svgs/GithubSvg.js'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__banner-content">
        <h1 className="header__text">Sameshostee</h1>
        <div className="header__social-links">
          <GithubSvg className="header__github-svg" />
        </div>
      </div>
    </header>
  )
}
