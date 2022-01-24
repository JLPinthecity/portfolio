import {React} from 'react';
import About from './components/About';
import Code from './components/Code';
import Writing from './components/Writing';
import Main from './components/Main';
import Layout from './components/Layout';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="writing" element={<Writing />} />
        <Route path="code" element={<Code />} />
      </Route>
  </Routes>
  );
}

export default App;