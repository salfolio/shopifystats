import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import styles from "./Content.module.css";
import SearchBar from "./SearchBar";
import Widget from "./Widget/Widget";
import SideInfo from "./Widget/SideInfo";
import TrackInfo from "./Widget/TrackInfo";
import Header from "./Header";

function Content() {
  const [token, setToken] = useState("generating token...");
  const [track, setTrack] = useState("");
  const [search, setSearch] = useState("");
  // const [imageLink, setImageLink] = useState("");
  const [trackID, setTrackID] = useState("");
  const [trackImage, setTrackImage] = useState("");
  const [artistSearch, setArtistSreach] = useState("");
  const inputEl = useRef();
  const [trackFeatures, setTrackFeatures] = useState({
    danceability: "",
    speechiness: "",
    instrumentalness: "",
    duration_ms: "",
    acousticness: "",
    valence: "",
    energy: "",
    loudness: "",
    tempo: "",
    time_signature: "",
  });

  //The base URI for all Web API requests is https://api.spotify.com/v1

  const client_id = "72a20b1835c8435583bd5e70ef1b7f84"; // Your client id
  const client_secret = "b81e1eab4da14a5c99341b5d22f4228b"; // Your secret
  const redirect_uri = "REDIRECT_URI"; // Your redirect uri

  //Drake ID: https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4?si=UIqyicucSA2x-fNcCMJHtg

  const id = "3TVXtAsR1Inumwj472S9r4";
  const type = "track";
  const market = "US";

  useEffect(() => {
    /** AUTHENTICATION  */
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
      .then((tokenresponse) => {
        console.log(tokenresponse.data.access_token);
        setToken(tokenresponse.data.access_token);

        /** GET TRACK NAME  */
        axios(`https://api.spotify.com/v1/search?q=${search}&type=${type}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + tokenresponse.data.access_token,
          },
        })
          .then((trackres) => {
            console.log(trackres.data.tracks.items[0].artists[0].name);
            console.log(trackres.data.tracks.items[0].name);
            console.log(trackres.data);

            setTrackID(trackres.data.tracks.items[0].id);
            // setTrackImage(trackres.data.tracks.items[0].images[0].url);
            // console.log(trackres.data.tracks.items[0].images[0].url);
            setTrack(trackres.data.tracks.items[0].name);
            console.log(
              "the actual track ID " + trackres.data.tracks.items[0].id
            );
            console.log("the new track ID is " + trackID);

            setArtistSreach(trackres.data.tracks.items[0].artists[0].name);
            console.log(trackres.data);
            // setImageLink(trackres.data.artists.items[0].images[0].url)
          })
          .catch((error) => console.log(error));

        /** GET TRACK AUDIO FEATURE  */
        /** GET TRACK NAME  */
        axios(`https://api.spotify.com/v1/audio-features/${trackID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + tokenresponse.data.access_token,
          },
        })
          .then((trackres) => {
            console.log(trackres.data);

            setTrackFeatures({
              danceability: trackres.data.danceability,
              speechiness: trackres.data.speechiness,
              instrumentalness: trackres.data.instrumentalness,
              duration_ms: trackres.data.duration_ms,
              acousticness: trackres.data.acousticness,
              valence: trackres.data.valence,
              energy: trackres.data.energy,
              loudness: trackres.data.loudness,
              tempo: trackres.data.tempo,
              time_signature: trackres.data.time_signature,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [search, trackID, artistSearch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.searchBarContainer}>
          <SearchBar setSearch={setSearch} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <TrackInfo artistSearch={artistSearch} track={track} />
        <div className={styles.content}>
          <div className={styles.widgets}>
            <Widget
              featureName={"DANCEABILITY"}
              featureValue={trackFeatures.danceability}
              progressBarColor={"#CA6A82"}
            />
            <Widget
              featureName={"ENERGY"}
              featureValue={trackFeatures.energy}
              progressBarColor={"#F1C837"}
            />
            {/* <Widget featureName={"INSTRUMENTALNESS"} featureValue={trackFeatures.instrumentalness} progressBarColor={'#E85454'}/> */}
            {/* <Widget featureName={"ACOUSTICNESS"} featureValue={trackFeatures.acousticness} progressBarColor={'#D49357'}/> */}
            <Widget
              featureName={"VALENCE"}
              featureValue={trackFeatures.valence}
              progressBarColor={"#57D46B"}
            />
            {/* <Widget featureName={"SPEECHINESS"} featureValue={trackFeatures.speechiness} progressBarColor={'#87C2D5'}/> */}
          </div>
          <div className={styles.sideInfoContainer}>
            <SideInfo
              duration={trackFeatures.duration_ms}
              tempo={trackFeatures.tempo}
              timeSignature={trackFeatures.time_signature}
              loudness={trackFeatures.loudness}
            />
            <SideInfo
              duration={trackFeatures.duration_ms}
              tempo={trackFeatures.tempo}
              timeSignature={trackFeatures.time_signature}
              loudness={trackFeatures.loudness}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
