import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        Robert's Portfolio
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#skills"
          onClick={() => handlePageChange('Skills')}
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Info
        </a>
      </li>
    </ul>
  );
}

export default Navigation;