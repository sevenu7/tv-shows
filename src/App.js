import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './Container/Dashboard/index';
import GenreShows from './Container/GenreShows';
import ShowInfo from './Container/ShowInfo';

class App extends Component {

  render() {
    return (
      < Switch >
        <Route path="/genre/:id" exact component={GenreShows} />
        <Route path="/show/:id" exact component={ShowInfo} />
        <Route path="/tv-shows" exact component={Dashboard} />
        <Redirect to="/tv-shows" />
      </Switch >
    );
  }

}

export default App;
