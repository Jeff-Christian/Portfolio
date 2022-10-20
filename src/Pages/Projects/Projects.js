// CSS
import styles from "./Project.module.css";

// images
import logo from "../../images/logo.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import owl from "../../images/owlBlogThumbnail.svg";

// routes
import { Link } from "react-router-dom";
import Works from "../../Components/Work/Works";

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

    <div className="container">
      <div className={styles.principal_container}>

        <div className={styles.principal_text}>
          <span>Rede Social</span>
          <h3>
            Owl, Blog <br></br>
            Projeto para postar  <br></br>
          </h3>
          <p>
            - Inspiração: Facebook & Twitter
          </p>
        </div>

        <div className={styles.principal_project}>

          <div className={styles.principal_project_content}>

            <div className={styles.project_image}>
              <img src={owl} alt="Owl Blog, rede social" />
            </div>
            <div className={styles.principal_project_bottom}>
              <div className={styles.project_name}> 
                <p>Setembro, 2022</p>
                <p>Owl BLog</p>
              </div>
              <div className={styles.view}>
                <button>Ver</button>
            </div>

            </div>

          </div>

        </div>

      </div>
    </div>
    
    <Works></Works>
    </>
  )
}

export default Projects