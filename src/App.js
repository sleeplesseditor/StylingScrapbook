import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const ButtonPage = React.lazy(() => import('./pages/ButtonPage/ButtonPage'));
const ImageEffectsPage = React.lazy(() => import('./pages/ImageEffects/ImageEffects'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(ButtonPage)} />
          <Route exact path="/image-effects" component={LazyLoader(ImageEffectsPage)} />
        </Switch>
    </Router>
  );
}

export default App;
