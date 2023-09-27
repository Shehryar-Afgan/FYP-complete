import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Career Development
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Contact
                </a>
              </li>
            </ul>
            <div className=''>
              <a className='nav-link active' href=''>
                {user.name}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
