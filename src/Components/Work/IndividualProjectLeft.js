import styles from "./IndividualProjectLeft.module.css";

const IndividualProjectLeft = (props) => {
  return (
    <div className={styles.projectLeft}>
        <div className={styles.project_image}>
          <img src={props.imageSource} alt={props.title} />
        </div>
        <div className={styles.project_Bottom}>
          <div className={styles.project_name}> 
            <p>{props.date}</p>
            <p>{props.title}</p>
          </div>
          <div className={styles.view}>
            <button>Ver</button>
          </div>
        </div>

    </div>

  )
}

export default IndividualProjectLeft