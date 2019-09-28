import React, { Component } from 'react'
import MenuContainer from './menu-container'

export default class SideBarMenu extends Component {
    constructor(props) { 
        super(props)
    }

    state = { 
        hidden: true,
        left: "-400px"
    }

    hideOrShow = () => { 
        this.setState({ 
            left: this.state.hidden ? "0px" : "-400px",
            hidden: !this.state.hidden
        })
    }

    render() {
        const { closeIcon, width, position } = this.props 
        return (
            <div style={{ gridArea: "sidebar" }}>
                { closeIcon ? <i className="material-icons menu-icon" onClick={ this.hideOrShow }> menu </i> : null }
                <MenuContainer 
                    hideOrShow={ this.hideOrShow } 
                    closeIcon={ closeIcon } 
                    width={ width } 
                    left={ position == "absolute" ? this.state.left : null }
                    position={ position }
                />
            </div>
        )
    }
}