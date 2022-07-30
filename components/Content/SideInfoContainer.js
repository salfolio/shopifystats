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
      />
      <SideInfo
        duration={props.duration}
        tempo={props.tempo}
        timeSignature={props.timeSignature}
        loudness={props.loudness}
      />
    </div>
  );
}

export default SideInfoContainer;
