import logo from '../logo.svg';
import './Header.css';


function HeaderButton(props) {
    return (
        <a href={props.link}>
        <div className = "Header-Button">
            <p>{props.name}</p>
        </div>
        </a>
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
      <div className="Header-Pages">
        <HeaderButton name="Home" link="https://roeliefantje.github.io/"/>
        <HeaderButton name="Projects" link="https://roeliefantje.github.io/"/>
      </div>
      <div className="Header-Socials">
        <HeaderSocialButton name="LinkedIn" source={logo}/>
        <HeaderSocialButton name="GitHub" source={logo}/>
        <HeaderSocialButton name="LeetCode" source={logo}/>
      </div>

    </div>
  );
}

export default Header;