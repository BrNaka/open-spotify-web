import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'

import HeaderContainer from './Header/header-container.jsx'
import SideBarMenu from './SideBar/sidebar-menu.jsx'
import PlayerContainer from './Player/player-container.jsx'

export default class App extends Component { 
    render() { 
        return (
            <div>
                <MediaQuery minWidth={ 340 } maxWidth={ 719 }>
                    <SideBarMenu/>
                    <div className="mobile-layout"> 
                        <HeaderContainer />
                        <div> </div>
                        <PlayerContainer />
                    </div>
                </MediaQuery> 
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)