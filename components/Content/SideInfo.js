import styles from "./SideInfo.module.css";

function SideInfo(props) {

    // Function to convert ms to minutes and seconds
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
      millisToMinutesAndSeconds(298999); 

  return (
    <div className={styles.sideInfo}>
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
          <p>TEMPO</p>
        </div>
        <div className={styles.sideInfoValue}>
          <p>{props.tempo}</p>
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
          <p>LOUDNESS</p>
        </div>
        <div className={styles.sideInfoValue}>
          <p>{props.loudness}</p>
        </div>
      </div>
      
    </div>
  );
}

export default SideInfo;
