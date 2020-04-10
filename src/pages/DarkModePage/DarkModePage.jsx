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