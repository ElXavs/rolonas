import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Watch from '../pages/Watch';
import CreateList from '../pages/CreateList';
import AddSong from '../pages/AddSong';
import List from '../pages/List';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lists" component={Watch} />
        <Route exact path="/add/list" component={CreateList} />
        <Route exact path="/add/song" component={AddSong} />
        <Route exact path="/lists/lo-fi_vibes" component={List} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
