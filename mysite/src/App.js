import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter basename={""}>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function NoPage() {
  return <h2>No page at requested path</h2>;
}
