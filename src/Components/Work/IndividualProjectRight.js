import styles from "./IndividualProjectRight.module.css";

const IndividualProjectRight = () => {
  return (
    <div className={styles.projectRight}>
        IndividualProject

        <div className={styles.project_Bottom}>
          <div className={styles.project_name}> 
            <p>Date</p>
            <p>Name</p>
          </div>
          <div className={styles.view}>
            <button>Ver</button>
          </div>
        </div>
    </div>
  )
}

export default IndividualProjectRight