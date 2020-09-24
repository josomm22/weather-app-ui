import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

import './App.scss';



function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <BrowserRouter >
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route exact path="/">
              <Redirect strict to="/home" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
