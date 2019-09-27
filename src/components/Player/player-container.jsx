import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import PlayerMusicInfo from './player-music-info.jsx'
import PlayerControllers from './player-contollers.jsx'
import PlayerOptions from './player-options.jsx'

export default class PlayerContainer extends Component { 
    render() {
        return (
            <div className="player-container"> 
                <MediaQuery minWidth={ 1024 }> 
                    <PlayerMusicInfo />
                    <PlayerControllers width="80%"/>
                    <PlayerOptions />
                </MediaQuery>
                <MediaQuery minWidth={ 720 } maxWidth={ 1023 }> 
                    <PlayerControllers width="80%"/>
                    <PlayerOptions width="50%" />
                </MediaQuery>
                <MediaQuery minWidth={ 340 } maxWidth={ 719 }> 
                    <PlayerMusicInfo />
                    <PlayerControllers/>
                    <PlayerOptions />
                </MediaQuery>
            </div>
        )
    }
}