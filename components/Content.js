import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {useRef} from 'react';

function Content() {
  const [token, setToken] = useState("generating token...");
  const [track, setTrack] = useState("");
  const [artist, setArtist] = useState("drake");
  const [artistSearch, setArtistSreach] = useState("");
  const inputEl = useRef();


  //The base URI for all Web API requests is https://api.spotify.com/v1

  const client_id = "72a20b1835c8435583bd5e70ef1b7f84"; // Your client id
  const client_secret = "b81e1eab4da14a5c99341b5d22f4228b"; // Your secret
  const redirect_uri = "REDIRECT_URI"; // Your redirect uri

  //Drake ID: https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4?si=UIqyicucSA2x-fNcCMJHtg

  const id = "3TVXtAsR1Inumwj472S9r4";
  const type = "artist"
  const market = "US";

  useEffect(() => {
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

        // axios(
        //   `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,
        //   {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //       Authorization: "Bearer " + tokenresponse.data.access_token,
        //     },
        //   }
        // )
        //   .then((trackres) => {
        //     console.log(trackres.data.tracks[4].name);
        //     setTrack(trackres.data.tracks[4].name);
        //   })
        //   .catch((error) => console.log(error));

        axios(
          `https://api.spotify.com/v1/search?q=${artist}&type=${type}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + tokenresponse.data.access_token,
            },
          }
        )
          .then((trackres) => {
            console.log(trackres.data.artists.items[0].name);
            // setTrack(trackres.data);
            setArtistSreach(trackres.data.artists.items[0].popularity)
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [artist]);

  const SearchFunctionHandler = (e) => {
      e.preventDefault()
      setArtist(inputEl.current.value);
      console.log(inputEl.current.value);
  }


  return (
    <div>
      <form onSubmit={SearchFunctionHandler}>
        <input ref={inputEl}></input>
        <input type="submit"></input>
      </form>
      <p>{artistSearch}</p>
    </div>
  );
}

export default Content;
