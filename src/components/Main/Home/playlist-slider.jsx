import React from 'react'

import Playlist from './playlist'

const PlaylistSlider = ({ title, description, collection }) => { 
  return(
    <div>
        <div className="header">
            <div className="description"> 
              <h3> { title } </h3>
              <span> { description } </span>
            </div>
            <div className="icons">
                <i className="material-icons"> keyboard_arrow_left </i>
                <i className="material-icons"> keyboard_arrow_right </i>
            </div>
        </div>
        <hr />
        <div className="playlists">
            { collection.map((info, index) => { 
                return <Playlist key={ index } info={ info }/>
            })}
        </div>
    </div>
  )
}

export default PlaylistSlider