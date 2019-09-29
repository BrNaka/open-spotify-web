import React, { useState } from 'react'

import TopLinks from './top-links'
import MidLinks from './mid-links'
import NewPlaylist from './new-playlist'

const MenuContainer = ({ width, left, position, closeIcon, hideOrShow, sidebarState }) => { 
    const [ menu, setMenu ] = useState({ 
        section: "top",
        activeLink: 0
    })

    return (
        <div className="menu-container" style={{ width: width, left: left, position: position }}>
            { 
                closeIcon ? <i className="material-icons close-icon" onClick={ () => hideOrShow({ left: sidebarState["hidden"] ? "0px" : "-400px", hidden: !sidebarState["hidden"]}) }> close </i> : null 
            }
            <TopLinks state={ menu } setMenu={ setMenu } />
            <MidLinks state={ menu } setMenu={ setMenu } /> <hr/>
            <NewPlaylist />
        </div> 
    )
}

export default MenuContainer