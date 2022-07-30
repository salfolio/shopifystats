import styles from "./Widget.module.css";

function TrackInfo() {
  return (
    <div>
      <div className={styles.trackInfo}>
        <h1>{artistSearch}</h1>
        <h1>{track}</h1>
      </div>
    </div>
  );
}

TrackInfo;
