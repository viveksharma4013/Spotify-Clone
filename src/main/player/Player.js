import React from 'react'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import SideBar from '../sidebar/SideBar'
import './Player.css'

function player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <SideBar></SideBar>
                <Body spotify={spotify}></Body>
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default player;
