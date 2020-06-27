/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CodeImage from './img/data.png';
import LaunchImage from './img/startup.png';
import SketchImage from './img/sketch.png';
import './IsometricCardPage.scss';

function IsometricCardPage() {
  return (
    <div className="App">
        <h2>Isometric Card Page</h2>
        <p>Images source from Formpik via FlatIcon</p>
        <div className="main-page-container">
          <div className="card-container">
            <div className="card">
              <div className="imgBx">
                <img className="card-img" src={SketchImage} alt="" />
              <h3>Design</h3>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis pulvinar elit. Donec scelerisque venenatis dolor sit amet faucibus.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgBx">
                <img className="card-img" src={CodeImage} alt="" />
                <h3>Code</h3>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis pulvinar elit. Donec scelerisque venenatis dolor sit amet faucibus.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgBx">
                <img className="card-img" src={LaunchImage} alt="" />
                <h3>Launch</h3>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis pulvinar elit. Donec scelerisque venenatis dolor sit amet faucibus.
                </p>
              </div>
            </div>
          </div>
        </div> 
    </div>
  );
}

export default IsometricCardPage;