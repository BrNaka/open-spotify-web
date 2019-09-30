import React from 'react'
import home from '../../../fake-data/fake-data'

import PlaylistSlider from './playlist-slider'

const HomeContainer = () => { 
  return (
    <div className="home-container"> 
        { home.map(({ title, description, collection }, index) => { 
            return <PlaylistSlider key={ index } title={ title } description={ description } collection={ collection } />
        })}
    </div>
  )
}

export default HomeContainer