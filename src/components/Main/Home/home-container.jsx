import React from 'react'
import home from '../../../fake-data/fake-data'

import PlaylistSlider from './playlist-slider'

const HomeContainer = () => { 
  return (
    <>
      <h1> <b> Home </b> </h1>
      <div className="home-container"> 
          { home.map((playlist, index) => { 
              return <PlaylistSlider key={ index } playlist={ playlist } />
          })}
      </div>
    </>
  )
}

export default HomeContainer