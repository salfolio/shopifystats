import styles from "./Content.module.css";
import SideInfoContainer from "./SideInfoContainer";
import TrackInfo from "./TrackInfo";
import WidgetContainer from "./WidgetContainer";
import { useState } from "react";
import InfoModal from "./InfoModal";
import Footer from "../Footer/Footer";

function Content(props) {

  const [infoModal, openInfoModal] = useState(false)

  function modalToggleHandler() {
    if(infoModal === false) {
      openInfoModal(true);
    } else{
      openInfoModal(false);
    }
  }

  if(infoModal === true) {
    return <InfoModal modalToggleHandler={modalToggleHandler}/>
  }
  else {
    return (
      <div>
      <div className={styles.container}>
        <div className={styles.trackInfoContainer}>
          <TrackInfo artistSearch={props.artistSearch} track={props.track} modalToggleHandler={modalToggleHandler} />
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
      <Footer/>
      </div>

    );
  }
}

export default Content;
