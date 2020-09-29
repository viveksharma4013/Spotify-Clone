import React, { useEffect } from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { useDataLayerValue } from '../../storage/DataLayer';

function Footer({ spotify }) {
    const [{ playing }, dispatch] = useDataLayerValue();
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if(playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
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
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
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
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footerImage__logo" src="https://upload.wikimedia.org/wikipedia/en/4/4d/TwilightCoverDrive.jpg" alt="cover"></img>
                <div className="foolter__songInfo">
                    <h4>Song Name</h4>
                    <p>Sonu Nigam</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon onClick={skipNext} className="footer__icon"></SkipPreviousIcon>
                {/* <PlayCircleOutlineIcon className="footer__icon" fontSize="large"></PlayCircleOutlineIcon>
                 */}
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                ) : (
                        <PlayCircleOutlineIcon
                            onClick={handlePlayPause}
                            fontSize="large"
                            className="footer__icon"
                        />
                    )}
                <SkipNextIcon className="footer__icon"></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
