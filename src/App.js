import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'; 

import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Component that creates the routes to the pages and renders the header and footer in all of them without nedding to re-render them 
 * 
 * @returns {JSX.Element} app element 
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
