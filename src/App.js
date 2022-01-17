import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <Header/>
      </div>

      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
