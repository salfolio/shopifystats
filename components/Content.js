import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";

function Content() {
  const [token, setToken] = useState("generating token...");
  const [track, setTrack] = useState("");
  const [search, setSearch] = useState("");
  // const [imageLink, setImageLink] = useState("");
  const [trackID, setTrackID] = useState("3q2v8QaTnHLveAQzR6gvYm");
  const [artistSearch, setArtistSreach] = useState("");
  const inputEl = useRef();
  const [trackFeatures, setTrackFeatures] = useState({
    danceability: "asd",
    duration_ms: "asdas",
    energy: "ad",
    loudness: "asda",
    tempo: "asd",
    time_signature: "asd",
    valence: "asd",
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
            setTrackID(trackres.data.tracks.items[0].id);
            console.log("the actual track ID " + trackres.data.tracks.items[0].id)
            console.log("the new track ID is " + trackID)


            // setTrack(trackres.data);
            // setArtistSreach(trackres.data.artists.items[0].popularity);
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
              duration_ms: trackres.data.duration_ms,
              energy: trackres.data.energy,
              loudness: trackres.data.loudness,
              tempo: trackres.data.tempo,
              time_signature: trackres.data.time_signature,
              valence: trackres.data.valence,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [search, trackID]);

  const SearchFunctionHandler = (e) => {
    e.preventDefault();
    setSearch(inputEl.current.value);
    console.log(inputEl.current.value);
  };

  return (
    <div>
      <form onSubmit={SearchFunctionHandler}>
        <input ref={inputEl}></input>
        <input type="submit"></input>
      </form>
      <p>{artistSearch}</p>
      {Object.keys(trackFeatures).map((keyName, i) => (
        <li key={i}>
          <span>
            {keyName} : {trackFeatures[keyName]}
          </span>
        </li>
      ))}
    </div>
  );
}

export default Content;
