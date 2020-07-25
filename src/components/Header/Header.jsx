/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.scss";
import HeaderIcon from '../../img/baseline_menu_white_18dp.png';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 100vw)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <h3 className="navbar-heading">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
          >
            Styling Scrapbook
          </Link>
        </h3>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <Link 
                to={"/"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Button Page
            </Link>
            <Link 
                to={"/image-effects"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Image Effects Page
            </Link>
            <Link 
                to={"/text-effects"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Text Effects Page
            </Link>
            <Link 
                to={"/navbar-effects"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Navbar Effects Page
            </Link>
            <Link 
                to={"/animation-effects"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Animation Page
            </Link>
            <Link 
                to={"/svg"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                SVG Page
            </Link>
            <Link 
                to={"/dark-mode"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Dark Mode Page
            </Link>
            <Link 
                to={"/isometric-card"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Isometric Card Page
            </Link>
            <Link 
                to={"/3d-effects"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                3D Effects Page
            </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="header-button">
        <img 
            src={HeaderIcon} 
            alt="HeaderIcon"
        />
      </button>
    </header>
  );
}