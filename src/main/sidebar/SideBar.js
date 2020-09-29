import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../storage/DataLayer';

function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" alt="spotify logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"></img>
            <SideBarOption Icon={HomeIcon} title="HOME" />
            <SideBarOption Icon={SearchIcon} title="SEARCH" />
            <SideBarOption Icon={LibraryMusicIcon} title="LIBRARY" />
            <br></br>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            {
                playlists?.items?.map(playlist => (
                    <SideBarOption album={playlist} title={playlist.name} />
                ))
            }
        </div>
    )
}

export default SideBar; 
