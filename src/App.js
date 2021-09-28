import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'; 

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
