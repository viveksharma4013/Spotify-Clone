import React from 'react'
import './SideBarOption.css'
import { useDataLayerValue } from '../../storage/DataLayer';

function SideBarOption({ title, Icon, album }) {
    const [{ playlistId }, dispatch] = useDataLayerValue();
    return (
        <div onClick={() => {
            dispatch({
                type: "SET_PLAYLIST_ID",
                playlist: album.id
            })
        }} className="sidebarOption">
            {Icon && <Icon className="sidebaroption__icon"></Icon>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption
