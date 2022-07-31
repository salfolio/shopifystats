import styles from "./Widget.module.css";
function ProgressBar(props) {
  // const progressBarWidth = props.featureValue * 260;

  return (
    <div className={styles.outerProgressBar}>
      <div
        className={styles.innerProgressBar}
        style={{
          width: ((props.featureValue) * 260),
          backgroundColor: props.progressBarColor,
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
