import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Writing from './components/Writing';
import Code from './components/Code';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="writing" element={<Writing />} />
          <Route path="code" element={<Code />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
