import SideInfo from "./SideInfo";
import styles from "./SideInfo.module.css";

function SideInfoContainer(props) {
  return (
    <div className={styles.sideInfoContainer}>
      <SideInfo
        duration={props.duration}
        tempo={props.tempo}
        timeSignature={props.timeSignature}
        loudness={props.loudness}
        acousticness={props.acousticness}
        instrumentalness={props.instrumentalness}
        key={props.key}
        speechiness={props.speechiness}
      />
    </div>
  );
}

export default SideInfoContainer;
