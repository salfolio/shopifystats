import styles from "./Content.module.css";
import SideInfoContainer from "./SideInfoContainer";
import TrackInfo from "./TrackInfo";
import WidgetContainer from "./WidgetContainer";

function Content(props) {
  return (
    <div className={styles.container}>
      <div className={styles.trackInfoContainer}>
        <TrackInfo artistSearch={props.artistSearch} track={props.track} />
      </div>
      <div className={styles.featuresContainer}>
        <WidgetContainer
          featureValue={props.featureValue} //this is an array of feature values
        />
        <SideInfoContainer
          duration={props.duration}
          tempo={props.tempo}
          timeSignature={props.timeSignature}
          loudness={props.loudness}
          keyVal={props.keyVal}
          acousticness={props.acousticness}
          speechiness={props.speechiness}
          instrumentalness={props.instrumentalness}
        />
      </div>
    </div>
  );
}

export default Content;
