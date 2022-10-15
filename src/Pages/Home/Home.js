import styles from "./Home.module.css";

// Components
import Header from "../../Components/Header/Header"

// Images
import nakama from "../../images/nakama-bg.svg";
import wave from "../../images/wave.svg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
        <Header></Header>

        <div className="container">
          <div className={styles.introduction}>

            <div className={styles.text}>
              <h3>Yo, eu sou </h3>
              <h3 className={styles.name}>Jéfferson Christian</h3>
              <p>Developer Front End || Freelancer</p>
              <p>Estudante de TI, apaixonado por Web e pelo mundo dos games, muita sede de conhecimento e capacitação, interajo por criações em alta performance e websites ricos e modernos.</p>
              <a href="https://drive.google.com/file/d/1ioBCMcqFQEr575EFtjXSMZTy7E5AXpBR/view?usp=sharing" download><button>Baixe meu Curriculo <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>

            <div className={styles.image}>
              <img className="img-fluid" src={nakama} alt="Jéfferson desenhado" />
            </div>
          </div>
        </div>

        <div className={styles.wave}>
          <img src={wave} alt="quebra de div" />
        </div>

        <div className={styles.next}>
          <h3>Coisas que eu faço</h3>
          <div>
            <div>
              <h4>Titulo</h4>
              <p>coisa</p>
            </div>
            <div>
              <h4>Titulo</h4>
              <p>coisa</p>
            </div>
            <div>
              <h4>Titulo</h4>
              <p>coisa</p>
            </div>
          </div>
          <div>
            <div>
              <h4>Titulo</h4>
              <p>coisa</p>
            </div>
            <div>
              <h4>Titulo</h4>
              <p>coisa</p>
            </div>
            <div>
              <h4>Titulo</h4>
              <p>coisa</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home