import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { MdLightMode } from 'react-icons/md';
import { MdNightlight } from 'react-icons/md';

import '../styles/navbar.css';
import { Navlinks } from '../actions/Navlinks';
import PropTypes from 'prop-types'; // Import PropTypes

const Navbar = ({ darkTheme, toggleTheme }) => {
  const [shownav, setShownav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setShownav(true);
      } else {
        setShownav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileNav = () => {
    setNavOpen(!navOpen);
  };

  const handleThemeToggle = () => {
    setIsRotated(!isRotated); // Toggle rotation
    toggleTheme(); // Call the parent theme toggle function
    const audio = new Audio('/audio/button-click.mp3');
    audio.play();
  };

  return (
    <div className='navbar-main'>
      {/* <div className='trigger'></div> */}
      <div
        className={`navbar ${shownav ? 'shownav' : 'hidenav'} ${
          darkTheme && 'navbar-dark'
        }`}
      >
        <ul className='nav'>
          {Navlinks.map((navlink) => {
            return (
              <li key={navlink.title}>
                <NavLink
                  to={navlink.path}
                  className={`'navlink' ${darkTheme && 'navlink-dark'} `}
                >
                  {navlink.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className={`light-dark-theme ${isRotated ? 'theme-rotate' : ''}`}
          onClick={() => {
            handleThemeToggle();
          }}
        >
          {darkTheme ? (
            <MdNightlight className='theme-dark' />
          ) : (
            <MdLightMode className='theme-light' />
          )}
        </button>
      </div>

      <div className='mobile-nav'>
        {navOpen && (
          <div className='nav-moverlay' onClick={handleMobileNav}></div>
        )}

        <button
          className={`nav-open ${darkTheme && 'nav-open-dark'}`}
          onClick={handleMobileNav}
        >
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <div className='m-nav-container'>
          <ul
            className={`m-nav ${navOpen ? 'open-mnav' : ''} ${
              darkTheme && 'm-nav-dark'
            }`}
          >
            {Navlinks.map((navlink) => {
              return (
                <li key={navlink.title}>
                  <NavLink
                    to={navlink.path}
                    className='m-navlink'
                    onClick={handleMobileNav}
                  >
                    {navlink.title}
                  </NavLink>
                </li>
              );
            })}

            <button
              className={`m-light-dark-theme ${
                isRotated ? 'theme-rotate' : ''
              }`}
              onClick={() => {
                handleThemeToggle();
                // setNavOpen(!navOpen);
              }}
            >
              {darkTheme ? (
                <MdNightlight className='theme-dark m-theme-dark' />
              ) : (
                <MdLightMode className='theme-light m-theme-light' />
              )}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  darkTheme: PropTypes.bool.isRequired, // 'darkTheme' must be a boolean
  toggleTheme: PropTypes.func.isRequired, // 'toggleTheme' must be a function
};

export default Navbar;
