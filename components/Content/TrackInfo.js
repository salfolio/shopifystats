import styles from "./TrackInfo.module.css";

function TrackInfo(props) {
  if (props.artistSearch === "") {
    return (
      <div className={styles.trackInfo}>
        <div className={styles.trackInfoFields}>
          <p>Search for track to get audio features...</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.trackInfo}>
      <div className={styles.trackInfoFields}>
        <p>{`${props.artistSearch} - ${props.track}`}</p>
      </div>
    </div>
  );
}

export default TrackInfo;
