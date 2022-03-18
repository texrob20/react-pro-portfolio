import React, { useState } from 'react';
import Nav from './Navigation';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Header');
  const renderPage =() => {    
    if (currentPage === 'Header') {
      return <Header />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
