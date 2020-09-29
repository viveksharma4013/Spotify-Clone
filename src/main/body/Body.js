import React, { useEffect } from 'react'
import './Body.css'
import Header from './header/Header';
import { useDataLayerValue } from '../../storage/DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './songrow/SongRow';
function Body({ spotify }) {
    const [{ playlist, playlistID }, dispatch] = useDataLayerValue();
    useEffect(() => {

    }, [playlistID])
    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: playlist.uri
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={playlist?.images[0]?.url} alt="Cover" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{playlist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon onClick={playPlaylist} className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {playlist?.tracks.items.map(item => (
                    <SongRow playSong={playSong} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
