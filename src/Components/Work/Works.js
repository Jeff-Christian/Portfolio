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
            date="Outubro, 2022, "
            title="BrotasGram"
            imageSource={require("../../images/brotasGram-thumbnail.png")}
            ></IndividualProjectLeft>

            <IndividualProjectRight></IndividualProjectRight>
        </div>
        <div className={styles.project_apresentation}>
            <IndividualProjectLeft
              date="Agosto, 2022, "
              title="Sun Developers"
              imageSource={require("../../images/sunPirates-thumbnail.png")}
            ></IndividualProjectLeft>
            
            <IndividualProjectRight></IndividualProjectRight>
        </div>
    </div>
    </div>
    </>
  )
}

export default Works