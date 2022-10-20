import styles from "./IndividualProjectRight.module.css";

const IndividualProjectRight = () => {
  return (
    <div className={styles.projectRight}>
        <p> Em Construção</p>

        <div className={styles.project_Bottom}>
          <div className={styles.project_name}> 
            <p>Em Breve</p>
            <p>Carregando</p>
          </div>
          <div className={styles.view}>
            <button>Ver</button>
          </div>
        </div>
    </div>
  )
}

export default IndividualProjectRight