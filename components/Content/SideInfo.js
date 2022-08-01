import styles from "./SideInfo.module.css";

function SideInfo(props) {
  // Function to convert ms to minutes and seconds
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  
  const tempoHeader = 'TEMPO (BPM)'
  const loudnessHeader = 'LOUDNESS (dB)'

  return (
    <div className={styles.sideInfo}>
        {/** ROW 1 */}
        {/** TRACK DURATION */}
        <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>DURATION</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{millisToMinutesAndSeconds(props.duration)}</p>
          </div>
        </div>

        {/** TRACK TEMPO */}
        <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>{tempoHeader}</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{Math.round(props.tempo)}</p>
          </div>
        </div>

        {/** TIME SIGNATURE */}
        <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>TIME SIGNATURE</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{props.timeSignature}</p>
          </div>
        </div>

        {/** TRACK LOUDNESS */}
        <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>{loudnessHeader}</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{Math.round(props.loudness)}</p>
          </div>
        </div>
        {/** ROW 2 */}
        {/** TRACK ACOUSTICNESS */}
        {/* <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>ACOUSTICNESS</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{props.acousticness}</p>
          </div>
        </div> */}

        {/** TRACK INSTRUMENTALNESS˝ */}
        {/* <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>INSTRUMENTALNESS</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{props.instrumentalness}</p>
          </div>
        </div> */}

        {/** TRACK KEY */}
        {/* <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>KEY</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{props.key}</p>
          </div>
        </div> */}

        {/** TRACK SPEECHINESS */}
        {/* <div className={styles.infoBox}>
          <div className={styles.sideInfoName}>
            <p>SPEECHINESS</p>
          </div>
          <div className={styles.sideInfoValue}>
            <p>{props.speechiness}</p>
          </div>
        </div> */}
      </div>
  );
}

export default SideInfo;
