import React from 'react'
import { Link } from 'react-router-dom'

const links = [ 
    { name: "Home", path:"/", icon: "home" },
    { name: "Browse", path:"/browse", icon: "search" },
    { name: "Radio", path:"radio", icon: "adjust" }
]

const TopLinks = ({ menuState, changeState }) => {
    const { section, activeLink } = menuState
    const isSectionActive = section == "top"

    return (
        <ul className="top">
            {   
                links.map((link, index) => {
                    return ( 
                        <Link key={index} to={ link.path }>
                            <li onClick={ () => changeState("top", link.name, index) } className={ isSectionActive ? (activeLink == index ? "activeItem" : null) : null }>
                                <i className="material-icons menuIcon"> { link.icon } </i> 
                                <span> { link.name } </span>
                            </li> 
                        </Link>
                    )}
                )
            }
        </ul>
    )
}

export default TopLinks