import React from 'react'
import { useSelector } from 'react-redux'

import HomeContainer from './Home/home-container'

const MainContainer = () => {
    const title = useSelector(state => state.menu.name) 
    
    return (
        <div className="main-container scroll">
            <h1> <b> { title } </b> </h1>
            <HomeContainer />
        </div>
    )
}

export default MainContainer