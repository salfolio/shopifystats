import styles from "./TrackInfo.module.css";
import {BsInfoCircle} from 'react-icons/bs';


function TrackInfo(props) {
  
  var trackInfo = '';
  if(props.artistSearch === ""){
    trackInfo = 'Search for track to get audio features...';
  }
  else {
    trackInfo = `${props.artistSearch} - ${props.track}`;
  }

  // if (props.artistSearch === "") {
  //   return (
  //     <div className={styles.trackInfo}>
  //       <div className={styles.trackInfoFields}>
  //         <p>Search for track to get audio features...</p>
  //       </div>
  //       <div>
          
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className={styles.trackInfo}>
      <div className={styles.trackInfoFields}>
        <p>{trackInfo}</p>
      </div>
      <div className={styles.infoButton} onClick={props.modalToggleHandler}>
        <BsInfoCircle size={28}/>
      </div>
    </div>
  );
}

export default TrackInfo;
