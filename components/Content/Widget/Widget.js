import ProgressBar from "./ProgressBar";
import styles from "./Widget.module.css";
import { useEffect, useState } from "react";

function Widget(props) {
  const [featureValue, setFeatureValue] = useState("");
  // Function to convert decimal to percentage
  function deciToPercentage(deci) {
    var percentage = (deci * 100).toFixed(0);
    return percentage + "%";
  }

  useEffect(() => {
    if (props.featureValue < 0.01) {
      setFeatureValue(0);
    } else {
      setFeatureValue(props.featureValue);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.featureTextContainer}>
        <div className={styles.featureName}>
          <p>{props.featureName}</p>
        </div>
        <div className={styles.featureValue}>
          <p>{deciToPercentage(props.featureValue)}</p>
        </div>
      </div>
      <ProgressBar
        progressBarColor={props.progressBarColor}
        featureValue={featureValue}
      />
    </div>
  );
}

export default Widget;
