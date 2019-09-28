import React from 'react'

import PlayerMusicInfo from './player-music-info.jsx'
import PlayerControllers from './player-contollers.jsx'
import PlayerOptions from './player-options.jsx'

const PlayerContainer = () => { 
    return (
        <div className="player-container"> 
            <PlayerMusicInfo />
            <PlayerControllers/>
            <PlayerOptions />
        </div>
    )
}

export default PlayerContainer