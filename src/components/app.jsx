import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import HeaderContainer from './Header/header-container'
import SideBarMenu from './SideBar/sidebar-menu'
import PlayerContainer from './Player/player-container'
import MenuContainer from './Main/main-container'

export default class App extends Component { 
    render() { 
        return (
            <Provider store={ store }>
                <div>
                    <MediaQuery minWidth={ 1024 } >
                        <div className="lg-screen-container"> 
                            <SideBarMenu
                                closeIcon={ false }
                                position="relative"
                            />
                            <HeaderContainer />
                            <div> </div>
                            <PlayerContainer/>
                        </div>
                    </MediaQuery> 
                    <MediaQuery minWidth={ 720 } maxWidth={ 1023 }>
                        <div className="md-screen-container"> 
                            <SideBarMenu
                                closeIcon={ false }
                                position="relative"
                            />
                            <HeaderContainer />
                            <div> </div>
                            <PlayerContainer/>
                        </div>
                    </MediaQuery> 
                    <MediaQuery minWidth={ 340 } maxWidth={ 719 }>
                        <SideBarMenu 
                            closeIcon={ true } 
                            width="40%" 
                            position="absolute" 
                        />
                        <div className="mobile-layout"> 
                            <HeaderContainer />
                            <MenuContainer />
                            <PlayerContainer />
                        </div>
                    </MediaQuery> 
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)