import React from 'react'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const title = useSelector(state => state.menu.name) 
    
    return (
        <div className="main-container scroll">
            <h1> { title } </h1>
        </div>
    )
}

export default MainContainer