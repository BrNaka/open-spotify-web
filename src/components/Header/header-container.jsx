import React, { Component } from 'react'

export default class HeaderContainer extends Component { 
    render() { 
        return (
            <div className="header-container"> 
                <div className="search"> 
                    <input type="text" placeholder="Search" />
                </div>
                <div className="account"> 
                    <div className="user"> 
                        <img src="https://i.imgur.com/OUKfaZ5.jpg" alt="brnaka"/> 
                        <span> brnaka </span>
                    </div>
                    <i className="material-icons"> keyboard_arrow_down </i>
                </div>
            </div>
        )
    }
}