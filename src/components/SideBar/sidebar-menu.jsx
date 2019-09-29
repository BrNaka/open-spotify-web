import React, { useState } from 'react'
import MenuContainer from './menu-container'

const SideBarMenu = ({ closeIcon, width, position }) => {
    const [sidebarState, setSidebarState ] = useState({ 
        hidden: true,
        left: "-400px"
    })

    const hideOrShowMenu = () => {
        let newState = { 
            left: sidebarState["hidden"] ? "0px" : "-400px", 
            hidden: !sidebarState["hidden"]
        }

        return setSidebarState(newState)
    }

    return (
        <div style={{ gridArea: "sidebar" }}>
            { 
                closeIcon ? <i className="material-icons menu-icon" onClick={ hideOrShowMenu }> menu </i> : null 
            }
            <MenuContainer
                hideOrShowMenu={ hideOrShowMenu } 
                closeIcon={ closeIcon } 
                width={ width } 
                left={ position == "absolute" ? sidebarState["left"] : null }
                position={ position }
            />
        </div>
    )
}

export default SideBarMenu