/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './DarkModePage.scss';

function DarkModePage() {
  const [switched, setSwitched] = useState(true);
  const toggleDarkMode = () => {
    setSwitched(!switched)
  };

  return (
    <div className="App" id={switched ? "light-mode-page" : "dark-mode-page"}>
        <h2>Dark Mode Page </h2>
        <div className="button-container">
          <button
            className="dark-mode-button"
            onClick={() => {toggleDarkMode()}}
          >
            {switched ? 'Light Mode' : 'Dark Mode'}
          </button >
        </div>
    </div>
  );
}

export default DarkModePage;