import styles from "./Widget.module.css";
function CircularProgress() {
  return (
    <div className={styles.circleWrap}>
      <div className={styles.circle}>
        <div className={styles.mask}>
          <div className={styles.fill}></div>
        </div>
      </div>
    </div>
  );
}

export default CircularProgress;
