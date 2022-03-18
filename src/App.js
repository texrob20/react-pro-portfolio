import React, { useState } from 'react';
import Nav from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Header');
  const renderPage =() => {    
    if (currentPage === 'Header') {
      return <Header />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
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

export default App;
