/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image1 from '../../img/image1.png';
import './ImageEffects.scss';

function ImageEffects() {
  return (
    <div className="App">
        <h2>Image Effects Page</h2>
        <div className="gallery-container">
          <div className="image-container-1">
            <img className="image-container-1-img" src={Image1} alt=""/>
            <div className="image-container-1-caption">
              <h1>amazing caption</h1>
              <p>some generic content text</p>
            </div>
          </div>
          <div className="image-container-2">
            <img className="image-container-2-img" src={Image1} alt=""/>
            <div className="image-container-2-caption">
              <h1>amazing caption</h1>
              <p>some generic content text</p>
            </div>
          </div>
          <div className="image-container-3">
            <img className="image-container-3-img" src={Image1} alt=""/>
            <div className="image-container-3-caption">
              <h1>amazing caption</h1>
              <p>some generic content text</p>
            </div>
          </div>
          <div className="image-container-4">
            <img className="image-container-4-img" src={Image1} alt=""/>
            <div className="image-container-4-caption">
              <h1>amazing caption</h1>
              <p>some generic content text</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ImageEffects;