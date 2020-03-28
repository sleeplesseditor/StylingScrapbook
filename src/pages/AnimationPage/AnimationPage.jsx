/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import TextAnimated from './TextAnimated';
import './AnimationPage.scss';

function AnimationPage() {
  return (
    <div className="App">
        <h2>Animation Page</h2>
        <div className="animation-container">
          <div className="animation-content-1">
            <TextAnimated />
          </div>
          <div className="animation-content-2">
            <div className="loading"></div>
          </div>
          <div className="animation-content-3">
            <button className="button">Hover Me</button>
          </div>
          <div className="animation-content-4">
            <button className="button">Hover Me</button>
          </div>
        </div>
    </div>
  );
}

export default AnimationPage;