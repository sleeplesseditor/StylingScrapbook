/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './DarkModePage.scss';

function DarkModePage() {
  const [switched, setSwitched] = useState(false);
  const toggleDarkMode = () => {
    setSwitched(!switched)
  };

  const renderDarkModeArea = () => {
    return (
      <React.Fragment>
        <div className="dark-mode-container">
          <div className="dark-mode-row">
            <div className="dark-mode-feature-1">
            <button className="button">
              Neon Button
            </button>
            </div>
            <div className="dark-mode-feature-2">
              <button className="button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Neon Button
              </button>
            </div>
          </div>
          <div className="dark-mode-row">
            <ul className="glowing-checkbox">
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <div className="icon"><i className="fa fa-gift" aria-hidden='true'></i></div>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <div className="icon"><i className="fa fa-beer" aria-hidden='true'></i></div>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <div className="icon"><i className="fa fa-heart" aria-hidden='true'></i></div>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <div className="icon"><i className="fa fa-globe" aria-hidden='true'></i></div>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <div className="icon"><i className="fa fa-graduation-cap" aria-hidden='true'></i></div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className="App" id={switched ? "light-mode-page" : "dark-mode-page"}>
      <h2>Dark Mode Page </h2>
      <div className="button-container">
        <input
          id="dark-mode-button"
          type="checkbox"
          onClick={() => {toggleDarkMode()}}
        />
        <label htmlFor="dark-mode-button" id="light-switch-label">
          <div></div>
          <div className="switch"></div>
          <div></div>
        </label>
      </div>
        <div className="dark-mode-container">
          {
            switched ? renderDarkModeArea() : null
          }
        </div>
      </div>
  );
}

export default DarkModePage;