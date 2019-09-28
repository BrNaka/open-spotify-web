import React from 'react'

const PlayerControllers = () => { 
    return (
        <div className="player-controllers-container">
            <div className="controllers"> 
                <i className="material-icons"> shuffle </i>
                <i className="material-icons"> skip_previous </i>
                <i className="material-icons play-icon"> play_circle_outline </i>
                <i className="material-icons"> skip_next </i>
                <i className="material-icons"> repeat </i>
            </div>
            <div className="timeline"> 
                <span> 0:00 </span>
                <div className="bar"> </div>
                <span> 3:59 </span>
            </div>
        </div>
    )
}

export default PlayerControllers