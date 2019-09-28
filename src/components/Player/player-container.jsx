import React from 'react'

import PlayerMusicInfo from './player-music-info'
import PlayerControllers from './player-contollers'
import PlayerOptions from './player-options'

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