import React from 'react'
import { Link } from 'react-router-dom'

const submenu = { 
    1: { name: "Genres & Moods", path: "/browse" },
    2: { name: "Podcasts", path: "/browse/podcasts" },
    3: { name: "Charts", path: "/browse/charts" },
    4: { name: "New Releases", path: "/browse/releases" },
    5: { name: "Discover", path: "/browse/discover" },
    6: { name: "Concerts", path: "/browse/concerts" },
}

const BrowseNav = ({ active, setActive }) => { 
    return (
        <nav>
            <ul> 
               { 
                   Object.keys(submenu).map(index => { 
                       return (
                           <Link key={ index } to={ submenu[index].path }>
                                <li onClick={() => setActive(index)} className={ index == active ? "border" : null }>
                                    <span> { submenu[index].name } </span>
                                    <div> </div>
                                </li>
                           </Link>
                       )
                   })
               }
            </ul>
        </nav>
    )
}

export default BrowseNav