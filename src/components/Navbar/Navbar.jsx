import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { events, contact } from '../../data';
import './Navbar.css';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul
        className={`nav__list ${showNavList ? 'show' : ''}`} /* Add 'show' class when toggled */
      >
        {events.length ? (
          <li className='nav__list-item'>
            <a
              href='#events'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Events
            </a>
          </li>
        ) : null}
        <li className='nav__list-item'>
          <a
            href='#calendar'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Calendar
          </a>
        </li>
        <li className='nav__list-item'>
          <a
            href='#participants'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Participants
          </a>
        </li>
        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;