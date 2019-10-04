import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import HomeContainer from './Home/home-container'
import BrowseContainer from './Browse/browse-container'
import RadioContainer from './Radio/radio-container'

const MainContainer = () => {
    return (
        <div className="main-container scroll">
            <Switch>
                <Route path="/" exact component={ HomeContainer } />
                <Route path="/browse" component={ BrowseContainer } />
                <Route path="/radio" component={ RadioContainer } />
                <Route path="*"> <Redirect to="/" /> </Route>
            </Switch>
        </div>
    )
}

export default MainContainer