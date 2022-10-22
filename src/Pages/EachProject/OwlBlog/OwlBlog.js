// CSS
import styles from "./OwlBlog.module.css";

// Icons
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import owlIcon from "../../../images/icon-owl.png";
import owlHome from "../../../images/owl-principal-home.svg";
import owlLogin from "../../../images/owl-principal-login.svg";
import owlPost from "../../../images/owl-principal-post.svg";
import owlProfile from "../../../images/owl-profille-left.svg";
import owlEditDelete from "../../../images/owl-profile-right.svg"
import owlEdit from "../../../images/owl-principal-edit.svg";
import gitHub from "../../../images/github-crimson.svg";

// Routes
import { Link } from 'react-router-dom'

const OwlBlog = () => {
  return (
    <div className='container'>
      <button className={styles.go_back}><Link to="/projetos"><FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>Projetos</Link></button>

      <div className="flex_center">

        <div className={styles.slide_image}>
          <img src={owlHome} alt="área principal de entrada" />
        </div>

        <div className={styles.description}>
          <div className={styles.icon}>
            <img src={owlIcon} alt="icone e logo da owl, coruja logo" />
          </div>
          <div className={styles.title}>
            <h3>
              Owl Blog,<br></br>
              Rede Social
            </h3>
          </div>
          <div className={styles.desc}>
            <p>
              Projeto criado com a inspiração do Facebook, a idéia é postar imagens com a motivação da postagem.
            </p>
          </div>
        </div>

        <div className={styles.slide_image}>
          <img src={owlLogin} alt="área principal de login" />
        </div>

        <div className={styles.images_section}>

          <div className={styles.images_left}>
            <img src={owlProfile} alt="área principal de perfil" />
          </div>
          
          <div className={styles.images_right}>
            <img src={owlEditDelete} alt="área principal de edição e exclusão dos posts" />
          </div>

        </div>

        <div className={styles.slide_image}>
          <img src={owlPost} alt="área principal de postagem" />
        </div>

        <div className={styles.slide_image}>
          <img src={owlEdit} alt="área principal de Edição de cada postagem" />
        </div>

        <div className={styles.description_bottom}>
          <button className={styles.visit}>
            <a href="https://jeff-christian.github.io/Owl-Blog/#/" target="_blank" rel="noreferrer">
              Visitar Projeto
            </a>
          </button>
          <a className={styles.github} href="https://github.com/Jeff-Christian/Owl-Blog" target="_blank" rel="noreferrer">
            <img src={gitHub} alt="Acessar repositório" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default OwlBlog