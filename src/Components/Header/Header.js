import styles from "./Header.module.css";

// images
import logo from "../../images/logo.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

// routes
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar container">
      <div className="container-fluid">
        <ul className={styles.navbarList}>
          <li className={styles.logoBox}>
            <Link className="navbar-brand" href="/home">
              <img id={styles.logo} className="img-fluid" src={logo} alt="Jéfferson Christian Logo" />
            </Link>
          </li>
          <li>
            <Link>.Sobre</Link>
          </li>
          <li>
            <Link>.Contato</Link>
          </li>
          <li>
            <Link>.Projetos</Link>
          </li>

          <li>
            <a href="https://github.com/Jeff-Christian" target="blank">
            <img id={styles.socialMedia} src={github} alt="Página pessoal do Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeffersonchristians/" target="blank">
            <img id={styles.socialMedia} src={linkedin} alt="Página pessoal do Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header