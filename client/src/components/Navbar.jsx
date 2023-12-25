import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import '../styles/navbar.css';

const Navbar = () => {
  const [shownav, setShownav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

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

  return (
    <div className='navbar-main'>
      {/* <div className='trigger'></div> */}
      <div className={`navbar ${shownav ? 'shownav' : ''}`}>
        <ul className='nav'>
          <li>
            <NavLink to='/' className='navlink'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='projects' className='navlink'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='blog' className='navlink'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='about' className='navlink'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='contact' className='navlink'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='mobile-nav'>
        {navOpen && (
          <div className='nav-moverlay' onClick={handleMobileNav}></div>
        )}
        <button className='nav-open' onClick={handleMobileNav}>
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <div className='m-nav-container'>
          <ul className={`m-nav ${navOpen ? 'open-mnav' : ''}`}>
            <li>
              <NavLink to='/' className='m-navlink' onClick={handleMobileNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='projects'
                className='m-navlink'
                onClick={handleMobileNav}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='blog'
                className='m-navlink'
                onClick={handleMobileNav}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to='about'
                className='m-navlink'
                onClick={handleMobileNav}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='contact'
                className='m-navlink'
                onClick={handleMobileNav}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
