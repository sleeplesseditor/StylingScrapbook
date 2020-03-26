/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function CascadingNavbar() {
  return (
    <div className="App">
      <ul className="navbar-content-1-menu">
        <li><a href="#">
          home
          <span></span>
          <span></span>  
          <span></span>  
          <span></span>  
        </a></li>
        <li><a href="#">
          about
          <span></span>
          <span></span>  
          <span></span>  
          <span></span>  
        </a></li>
        <li><a href="#">
          services
          <span></span>
          <span></span>  
          <span></span>  
          <span></span>  
        </a></li>
        <li><a href="#">
          team
          <span></span>
          <span></span>  
          <span></span>  
          <span></span>  
        </a></li>
        <li><a href="#">
          content
          <span></span>
          <span></span>  
          <span></span>  
          <span></span>  
        </a></li>
      </ul>
    </div>
  );
}

export default CascadingNavbar;