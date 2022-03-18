import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#header"
          onClick={() => handlePageChange('Header')}
          className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
}

export default Navigation;