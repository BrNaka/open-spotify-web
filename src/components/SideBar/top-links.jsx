import React from 'react'

const links = [ 
    { name: "Home", icon: "home" },
    { name: "Browse", icon: "search" },
    { name: "Radio", icon: "adjust" }
]

const TopLinks = ({ state, setMenu }) => {
    const { section, activeLink } = state
    const isSectionActive = section == "top"
    
    return (
        <ul className="top">
            {
                links.map((link, index) => {
                    return ( 
                        <li key={index} onClick={ () => setMenu({ section: "top", activeLink: index }) } className={ isSectionActive ? (activeLink == index ? "activeItem" : null) : null }>
                            <i className="material-icons menuIcon"> { link.icon } </i> 
                            <span> { link.name } </span>
                        </li> 
                    )}
                )
            }
        </ul>
    )
}

export default TopLinks