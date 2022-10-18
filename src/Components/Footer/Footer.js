import styles from "./Footer.module.css";

// Images
import instagram from "../../images/instagram.svg";
import whatsapp from "../../images/whatsapp.svg";
import telegram from "../../images/telegram.svg";

const Footer = () => {
  return (
    <>
    <div className='container'>
      <footer className={styles.footer}>
        <ul className={styles.social_media}>
          <li>
            <a href="https://www.instagram.com/yojeffchristian/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Página do Instagram" />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5511989259877&text=O%20sonho%20de%20um%20homem%2C%20nunca%20tem%20fim." target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Página do Whatsapp" />
              <p>WhatsApp</p>
            </a>
          </li>
          <li>
            <a href="https://t.me/JeeffChristian" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Página do Telegram" />
              <p>Telegram</p>
            </a>
          </li>
        </ul>

        <p>Desenvolvido por <a href="https://github.com/Jeff-Christian">Jéff Christian</a></p>
      </footer>
    </div>
    </>
  )
}

export default Footer