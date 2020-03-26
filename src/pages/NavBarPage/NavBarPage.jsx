/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CascadingNavbar from './CascadingNavbar';
import BorderNavBar from './BorderNavBar';
import BoxNavBar from './BoxNavBar';
import SocialIconBar from './SocialIconBar';
import './NavBarPage.scss';

function NavBarPage() {
  return (
    <div className="App">
        <h2>Navbar Effects Page</h2>
        <div className="navbar-container">
          <div className="navbar-content-1">
            <CascadingNavbar />
          </div>
          <div className="navbar-content-2">
            <BorderNavBar />
          </div>
          <div className="navbar-content-3">
            <BoxNavBar />
          </div>
        </div>
        <div>
          <SocialIconBar />
        </div>   
    </div>
  );
}

export default NavBarPage;