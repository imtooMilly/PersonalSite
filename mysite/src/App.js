import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='*' element = {<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function NoPage() {
  return <h2>No page at requested path</h2>;
}
