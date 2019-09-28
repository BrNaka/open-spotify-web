import React from 'react'

const PlayerOptions = () => { 
    return (
        <div className="player-option-container"> 
            <i className="material-icons"> playlist_play </i>
            <i className="material-icons"> devices </i>
            <div className="bar">
                <i className="material-icons"> volume_up </i>
                <div> </div>
            </div>
            <i className="material-icons"> fullscreen </i>
        </div>
    )
}

export default PlayerOptions