// CSS
import styles from "./Work.module.css";

// Components
import IndividualProjectLeft from "./IndividualProjectLeft";
import IndividualProjectRight from "./IndividualProjectRight";

const Works = () => {
  return (
    <>
    <div className="container">
    <div className={styles.work_container}>
        <div className={styles.title}>
            <h3>Projetos</h3>
        </div>
        <div className={styles.project_apresentation}>
            <IndividualProjectLeft
            date="19, October"
            title="Owl Blog"
            imageSource={require("../../images/profile.png")}
            ></IndividualProjectLeft>
            <IndividualProjectRight></IndividualProjectRight>
        </div>
        <div className={styles.project_apresentation}>
            <IndividualProjectLeft></IndividualProjectLeft>
            <IndividualProjectRight></IndividualProjectRight>
        </div>
    </div>
    </div>
    </>
  )
}

export default Works