import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const ButtonPage = React.lazy(() => import('./pages/ButtonPage/ButtonPage'));
const ImageEffectsPage = React.lazy(() => import('./pages/ImageEffects/ImageEffects'));
const TextEffectsPage = React.lazy(() => import('./pages/TextEffects/TextEffects'));
const NavbarPage = React.lazy(() => import('./pages/NavBarPage/NavBarPage'));
const AnimationPage = React.lazy(() => import('./pages/AnimationPage/AnimationPage'));
const SVGPage = React.lazy(() => import('./pages/SVGPage/SVGPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(ButtonPage)} />
          <Route exact path="/image-effects" component={LazyLoader(ImageEffectsPage)} />
          <Route exact path="/text-effects" component={LazyLoader(TextEffectsPage)} />
          <Route exact path="/navbar-effects" component={LazyLoader(NavbarPage)} />
          <Route exact path="/animation-effects" component={LazyLoader(AnimationPage)} />
          <Route exact path="/svg" component={LazyLoader(SVGPage)} />
        </Switch>
    </Router>
  );
}

export default App;
