import React from 'react'

import MenuItem from './menu-item'

const topMenuLinks = [ 
    { name: "Home", icon: "home" },
    { name: "Browse", icon: "search" },
    { name: "Radio", icon: "adjust" }
]

const TopLinks = ({ menuState, activeItem }) => { 
    const section = "top"
    return (
        <ul className="top">
            {
                topMenuLinks.map((link, index) => 
                    <MenuItem 
                        key={ index }
                        activate={ () => activeItem(index, section) } 
                        isActive={ menuState["selected"] == section ? index == menuState[section]["activeLink"] : false }
                        name={ link.name } 
                        icon={ link.icon } 
                    />
                )
            }
        </ul>
    )
}

export default TopLinks