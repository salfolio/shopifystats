import { VscClose } from "react-icons/vsc";
import Footer from "../Footer/Footer";
import InfoBlock from "./InfoBlocks";

import styles from "./InfoModal.module.css";
function InfoModal(props) {
  const infoBlockValues = [
    {
      title: "DANCEABILITY",
      description:
        "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.",
    },
    {
      title: "ACOUSTICNESS",
      description:
        "A confidence measure from 0.0 (0%) to 1.0 (100%) of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.",
    },
    {
      title: "ENERGY",
      description:
        "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.",
    },
    {
      title: "INSTRUMENTALNESS",
      description:
        "Predicts whether a track contains no vocals. 'Ooh' and 'aah' sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly 'vocal'. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.",
    },
    {
      title: "LOUDNESS",
      description:
        "The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.",
    },
    {
      title: "SPEECHINESS",
      description:
        "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.",
    },
    {
      title: "TIME SIGNATURE",
      description:
        'An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".',
    },
    {
      title: "VALENCE",
      description:
        "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).",
    },
    {
      title: "TEMPO",
      description:
        "The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.",
    },
  ];

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        {/**HEADER */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="./images/logo/trackstatslogo.png" width="50px"></img>
          </div>
          <div className={styles.pageHeader}>
            <p>INFO</p>
          </div>
          <div className={styles.closeIcon} onClick={props.modalToggleHandler}>
            <VscClose size={"50px"} color="white" />
          </div>
        </div>
        {/* Body */}
        <div className={styles.body}>
          <div className={styles.intro}>
            <p>
              Get audio features for any track. Powered by the Spotify Web API.
            </p>
          </div>
          <div className={styles.content}>
            {infoBlockValues.map((element) => {
              return <InfoBlock key={element.title} title={element.title} description={element.description}/>
            })}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default InfoModal;
