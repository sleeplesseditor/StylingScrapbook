/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ButtonPage.scss';

function ButtonPage() {
  return (
    <div className="App">
        <h2>Button Page</h2>
        <div className="button-container">
          <div className="button-container-block">
            <div className="button-container-frame">
              <a href="" className="button-hover-1">Hover Me</a>
            </div>
          </div>
          <div className="button-container-block">
            <div className="button-container-frame">
              <a href="" className="button-hover-2">Hover Me</a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ButtonPage;