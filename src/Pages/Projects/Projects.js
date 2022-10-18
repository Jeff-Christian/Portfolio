// CSS
import styles from "./Project.module.css";

// images
import logo from "../../images/logo.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

// routes
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
    <nav className="container">
        <ul className={styles.navbarList}>
          <li className={styles.logoBox}>
            <Link className="navbar-brand" to="/">
              <img id={styles.logo} className="img-fluid" src={logo} alt="Jéfferson Christian Logo" />
            </Link>
          </li>
          <div className="display">
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
          </div>
        </ul>
    </nav>

    <div className={styles.flex}>
      Página com os projetos em construção.
    </div>

    </>
  )
}

export default Projects