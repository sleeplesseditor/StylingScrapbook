/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TextAnimated, TextLighting } from './TextAnimated';
import { BouncingLine } from './Bouncing';
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
          <div className="animation-content-5">
            <TextLighting />
          </div>
          <div className="animation-content-6">
            <div className="heart"></div>
          </div>
          <div className="animation-content-7">
            <h1>css animation</h1>
          </div>
          <div className="animation-content-8">
            <BouncingLine />
          </div>
        </div>
    </div>
  );
}

export default AnimationPage;