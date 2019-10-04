import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TopLinks from './top-links'
import MidLinks from './mid-links'
import NewPlaylist from './new-playlist'

const MenuContainer = ({ width, left, position, closeIcon, hideOrShowMenu }) => { 
    const menuState = useSelector(state => state.menu)
    const dispatch = useDispatch()
    
    function changeState(section, name, index) { 
        dispatch({ 
            type: "CHANGE_SECTION", 
            changes: { 
                section: section, 
                name: name, 
                activeLink: index 
            }
        })
    }
   
    return (
        <div className="menu-container" style={{ width: width, left: left, position: position }}>
            { 
                closeIcon ? <i className="material-icons close-icon" onClick={ hideOrShowMenu }> close </i> : null 
            }
            <TopLinks menuState={ menuState } changeState= { changeState } />
            <MidLinks menuState={ menuState } changeState= { changeState } /> 
            <hr/>
            <NewPlaylist />
        </div> 
    )
}

export default MenuContainer