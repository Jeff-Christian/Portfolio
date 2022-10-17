import styles from "./Home.module.css";

// Components
import Header from "../../Components/Header/Header"

// Images
import nakama from "../../images/nakama-bg.svg";
import wave from "../../images/wave.svg";
import js from "../../images/square-js.svg";
import react from "../../images/react.svg";
import angular from "../../images/angular.svg";
import figma from "../../images/figma.svg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { faObjectGroup } from "@fortawesome/free-regular-svg-icons";

// Hooks
import { useState } from "react";


const Home = () => {

  const [devfield, SetdevField] = useState(false);
  const [designField, SetDesignField] = useState(false);

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
              <a href="https://drive.google.com/u/0/uc?id=1ioBCMcqFQEr575EFtjXSMZTy7E5AXpBR&export=download" download target="blank"><button>Baixe meu Curriculo <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>

            <div className={styles.image}>
              <img className="img-fluid" src={nakama} alt="Jéfferson desenhado" />
            </div>
          </div >
        </div>

        <div>
          <img src={wave} alt="Separador de seções" />
        </div>

        <div className={styles.skills}>

          <div className="container">

          <h3>Coisas que eu faço</h3>

          <div className={styles.skills_container}>

            <div className={styles.skills_desc}>

              <button onClick={() => SetdevField(!devfield)}>Front-End Developer <FontAwesomeIcon icon={faWindowRestore}/></button>
              {devfield && <div className={styles.skills_dev}>
                <img src={js} alt="javascript" />
                <img src={react} alt="react" />
                <img src={angular} alt="Angular" />
              </div>}

              <button onClick={() => SetDesignField(!designField)}>Front-End Design <FontAwesomeIcon icon={faObjectGroup}/> </button>
              {designField && <div className={styles.skills_design}>
                <img src={figma} alt="Figma" />
              </div>}
            </div>

            <div className={styles.iDo}>

              <div>
                <div>
                  <h4 className= {styles.title}>Web</h4>
                  <p className={styles.subtitle}>Eu construo páginas responsivas e criativas, com a estratégia da marca em mente.</p>
                </div>
                <div>
                  <h4 className= {styles.title}>Interfaces</h4>
                  <p className={styles.subtitle}>Eu crio interfaces dinamicas e produtivas.</p>
                </div>
                <div>
                  <h4 className= {styles.title}>Código</h4>
                  <p className={styles.subtitle}>Eu codifico semanticamente, de modo a tratar sempre com um código limpo.</p>
                </div>
              </div>

              <div>
                <div>
                  <h4 className= {styles.title}>Versionamento</h4>
                  <p className={styles.subtitle}>Eu gerencio toda a dinamica do projeto para trabalhar da melhor maneira em equipe.</p>
                </div>
                <div>
                  <h4 className= {styles.title}>Marca</h4>
                  <p className={styles.subtitle}>Eu identifico os principios fundamentais da marca e crio aplicações para a sua evolução.</p>
                </div>
                <div>
                  <h4 className= {styles.title}>Tecnico</h4>
                  <p className={styles.subtitle}>Eu simplifico coisas tecnologicas para satisfação dos clientes.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
                  
        </div>
    </>
  )
}

export default Home