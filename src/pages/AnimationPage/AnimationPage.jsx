/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TextAnimated, TextLighting } from './TextAnimated';
import { BouncingLine } from './Bouncing';
import { SocialMedia } from './SocialMedia';
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
          <div className="animation-content-9">
            <div className="rain"></div>
          </div>
          <div className="animation-content-10">
            <SocialMedia />
          </div>
          <div className="animation-content-11">
            <div className="pulse">
              <i className="fas fa-phone"></i>
            </div>
          </div>
          <div className="animation-content-12">
            <div className="cradle">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="animation-content-13">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="animation-content-14">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="animation-content-15">
            <h1>loading...</h1>
          </div>
        </div>
    </div>
  );
}

export default AnimationPage;