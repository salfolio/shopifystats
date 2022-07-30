import ProgressBar from "./ProgressBar";
import styles from "./Widget.module.css";

function Widget(props) {

  return (
    <div className={styles.container}>
      <div className={styles.featureTextContainer}>
        <div className={styles.featureName}>
          <p>{props.featureName}</p>
        </div>
        <div className={styles.featureValue}>
          <p>{props.featureValue}</p>
        </div>
      </div>
      <ProgressBar progressBarColor={props.progressBarColor} featureValue={props.featureValue}/>
    </div>
  );
}

export default Widget;
