import React from 'react'
import MenuItem from './menu-item'

const libraryLinks = [ 
    { name: "Made for You", icon: null },
    { name: "Recently Played", icon: null },
    { name: "Liked Songs", icon: null },
    { name: "Albums", icon: null },
    { name: "Artists", icon: null },
    { name: "Podcasts", icon: null }
]

const MidLinks = ({ menuState, activeItem }) => { 
    const section = "library"
    return (
        <div className="menu-scroll">
            <ul className="library"> 
                <li className="label"> Your Library </li>
                {
                    libraryLinks.map((link, index) => 
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
            <ul className="library" style={{ marginTop: "20px" }}> 
                <li className="label"> Playlists </li>
                {
                    libraryLinks.map((link, index) => 
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
        </div>
    )
}

export default MidLinks