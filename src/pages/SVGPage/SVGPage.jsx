/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShapesLogo from './ShapesLogo';
import SocialIcons from './SocialIcons';
import InstagramIcon from './InstagramIcon';
import SearchLight from './SearchLight';
import './SVGPage.scss';

function SVGPage() {
  return (
    <div className="App">
        <h2>SVG Page</h2>
        <div className="svg-container">
          <div className="svg-content-1">
            <ShapesLogo />
          </div>
          <div className="svg-content-2">
            <SocialIcons />
          </div>
          <div className="svg-content-3">
            <InstagramIcon />
          </div>
          <div className="svg-content-4">
            <SearchLight />
          </div>
        </div>   
    </div>
  );
}

export default SVGPage;