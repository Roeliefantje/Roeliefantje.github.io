import githubLogo from '../svgs/github-logo.svg'
import itchioLogo from '../svgs/itchio-logo.svg'
import linkedinLogo from '../svgs/linkedin-logo.svg'
import '../css/Header.css';
import {Link} from "react-router-dom";


function HeaderButton(props) {
    return (
        <Link to={props.link}>
        <div className = "Header-Button">
            <p>{props.name}</p>
        </div>
        </Link>
    )
}

function HeaderSocialButton(props) {
    return (
        <a href={props.link}>
            <div className= "Header-Social-Button">
                <img className="Header-Social-Image" src={props.source} alt={props.name}/>
            </div>
        </a>
    )
}

function Header() {
  return (
    <div className="Header">
      <div className="HeaderWrapper">
        <div className="Header-Pages">
          <HeaderButton name="Home" link="/"/>
          <HeaderButton name="Projects" link="/Projects"/>
          <HeaderButton name="Education" link="/Education"/>
        </div>
        <div className="Header-Socials">
          <HeaderSocialButton name="LinkedIn" source={linkedinLogo} link="https://www.linkedin.com/in/roel-de-jeu-82217b207/"/>
          <HeaderSocialButton name="GitHub" source={githubLogo} link="https://github.com/Roeliefantje"/>
          <HeaderSocialButton name="itch.io" source={itchioLogo} link="https://roeliefantje.itch.io/"/>
        </div>
      </div>

    </div>
  );
}

export default Header;