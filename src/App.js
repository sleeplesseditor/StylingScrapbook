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
const DarkModePage = React.lazy(() => import('./pages/DarkModePage/DarkModePage'));
const IsometricCardPage = React.lazy(() => import('./pages/IsometricCardPage/IsometricCardPage'));
const ThreeDEffectsPage = React.lazy(() => import('./pages/ThreeDEffectsPage/ThreeDEffectsPage'));

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
          <Route exact path="/dark-mode" component={LazyLoader(DarkModePage)} />
          <Route exact path="/isometric-card" component={LazyLoader(IsometricCardPage)} />
          <Route exact path="/3d-effects" component={LazyLoader(ThreeDEffectsPage)} />
        </Switch>
    </Router>
  );
}

export default App;
