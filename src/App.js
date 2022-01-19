import {React, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';

function App() {
  const [sidebar, setSidebar] = useState(false) 

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="app">
      
      <div className="main-container">
        <Header clickMenuIcon={showSidebar} show={sidebar}/>
        <Sidebar clickMenuIcon={showSidebar} show={sidebar}/>
        <Main/>
      </div>

      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
