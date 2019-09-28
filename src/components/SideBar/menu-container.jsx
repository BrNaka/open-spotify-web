import React, { Component } from 'react'

import TopLinks from './top-links'
import MidLinks from './mid-links'
import NewPlaylist from './new-playlist'

export default class MenuContainer extends Component { 
    constructor(props) { 
        super(props)
    }

    state = { 
        menu: {
            selected: "top", // Default option
            top: { activeLink: 0 },
            library: { activeLink: 0 }
        }
    }

    activeItem = (index, section) => {          
        const menu = this.state.menu

        menu.selected = section
        menu[section].activeLink = index

        this.setState({ menu })
    }

    render() { 
        
        const menu = this.state.menu
        const { width, left, position, closeIcon, hideOrShow } = this.props

        return (
            <div className="menu-container" style={{ width: width, left: left, position: position }}>
                { closeIcon ? <i className="material-icons close-icon" onClick={ hideOrShow }> close </i> : null }
                <TopLinks menuState={ menu } activeItem={ this.activeItem } />
                <MidLinks menuState={ menu } activeItem={ this.activeItem } />
                <hr/>
                <NewPlaylist />
            </div> 
        )
    }
}
