import React from 'react'

const links = [ 
    { name: "Made for You" },
    { name: "Recently Played" },
    { name: "Liked Songs" },
    { name: "Albums" },
    { name: "Artists" },
    { name: "Podcasts" }
]

const MidLinks = ({ menuState, changeState }) => { 
    const { section, activeLink } = menuState
    const isSectionActive = section == "library"
    
    return (
        <div className="scroll">
            <ul className="library"> 
                <li className="label"> Your Library </li>
                {
                    links.map((link, index) => 
                         <li key={index} onClick={ () => changeState("library", link.name, index ) } className={ isSectionActive ? (activeLink == index ? "activeItem" : null) : null }>
                            <span> { link.name } </span>
                        </li> 
                    )
                }
            </ul>
            <ul className="library"> 
                <li className="label"> Playlists </li>
                {
                    links.map((link, index) => 
                         <li key={index} onClick={ () => changeState("library", link.name, index ) } className={ isSectionActive ? (activeLink == index ? "activeItem" : null) : null }>
                            <span> { link.name } </span>
                        </li> 
                    )
                }
            </ul>
        </div>
    )
}

export default MidLinks