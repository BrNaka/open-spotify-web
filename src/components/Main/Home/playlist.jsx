import React from 'react'

const Playlist = ({ info }) => { 
    const { title, cover, subtitle, followers } = info
    return (
        <div className="playlist" style={ subtitle != "" ? { minHeight: "270px" } : null }>
            <div className="cover"> 
                <img src={cover} />
            </div>
            <div className="description">
                <h4 className="title"> { title } </h4>
                <p> { subtitle } </p> 
                <p> { followers != null ? `${ followers } Followers` : null } </p>
            </div>
        </div>
    )
}

export default Playlist