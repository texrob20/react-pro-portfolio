import React, { useState } from 'react';
import Nav from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Project from "./components/Project";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [navigation] = useState ([
  'About Me',
  'Portfolio',
  'Contact',
  'Resume'
  ])

  return (
    <div className="App">
      <Nav navigation={navigation} />
      <Header />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
