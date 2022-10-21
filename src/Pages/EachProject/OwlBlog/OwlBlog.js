// CSS
import styles from "./OwlBlog.module.css";

// Icons
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import owlIcon from "../../../images/icon-owl.png";
import owlHome from "../../../images/owl-principal-home.svg";

// Routes
import { Link } from 'react-router-dom'

const OwlBlog = () => {
  return (
    <div className='container'>
      <button className={styles.go_back}><Link to="/projetos"><FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>Projetos</Link></button>

      <div className="flex_center">

        <div className={styles.slide_image}>
          <img src={owlHome} alt="área principal de postagem" />
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
              Breve descrição que daqui a pouco eu escrevo e penso melhor no quê colocar aqui...
            </p>
          </div>
        </div>
        <div className={styles.slide_image}></div>
        <div className={styles.images_section}>
          <div className={styles.images_left}></div>
          <div className={styles.images_right}></div>
        </div>
        <div className={styles.slide_image}></div>
        <div className={styles.slide_image}></div>
        <div className={styles.description}></div>

      </div>
    </div>
  )
}

export default OwlBlog