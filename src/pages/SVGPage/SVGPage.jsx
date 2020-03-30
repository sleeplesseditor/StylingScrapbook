/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShapesLogo from './ShapesLogo';
import './SVGPage.scss';

function SVGPage() {
  return (
    <div className="App">
        <h2>SVG Page</h2>
        <div className="svg-container">
          <div className="svg-content-1">
            <ShapesLogo />
          </div>
        </div>   
    </div>
  );
}

export default SVGPage;