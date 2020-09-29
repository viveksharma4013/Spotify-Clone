import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './main/login/Login';
import { getAccessToken } from './main/login/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './main/player/Player';
import { useDataLayerValue } from './storage/DataLayer';

const spotify = new SpotifyWebApi()
function App() {
  const [{ user, token, playlistId }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists
        })
      }).catch((err) => console.log("Error in playlist fetch", err))
      // if(playlistId) {
      spotify.getPlaylist("43WljY24lpwI194ytNuTWL").then(response => {
        dispatch({
          type: "SET_SELECTED_PLAYLIST",
          playlist: response
        })
      })
      // }
    }
  }, [])
  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
