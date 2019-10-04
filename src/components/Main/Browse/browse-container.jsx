import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import BrowseNav from './borwser-nav'

import GenreContainer from './Genre/genre-container'
import PodcastsContainer from './Podcasts/podcasts-container'
import ChartsContainer from './Charts/charts-container'
import ReleasesContainer from './Releases/releases-container'
import DiscoverContainer from './Discover/discover-container'
import ConcertsContainer from './Concerts/concerts-container'

const BrowseContainer = () => { 
    const [ active, setActive ] = useState(1)

    return (
        <div className="browse-container">
            <h1> <b> Browse </b></h1>
            <BrowseNav active={ active } setActive={ setActive }/>
            <div className="content">
                <Switch>
                    <Route path="/browse" exact component={ GenreContainer }/>
                    <Route path="/browse/podcasts" exact component={ PodcastsContainer }/>
                    <Route path="/browse/charts" exact component={ ChartsContainer }/>
                    <Route path="/browse/releases" exact component={ ReleasesContainer }/>
                    <Route path="/browse/discover" exact component={ DiscoverContainer }/>
                    <Route path="/browse/concerts" exact component={ ConcertsContainer }/>
                </Switch>
            </div>
        </div>
    )
}

export default BrowseContainer