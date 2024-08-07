import './App.css'; // Ensure this doesn't override Chakra UI styles
import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ChakraProvider, Box} from '@chakra-ui/react';
// import { useInView } from 'react-intersection-observer';

import theme from './Components/theme';
import Navbar from './Components/navbar'
import Page from "./Components/Page"

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el));
  
  return (
    <div className='App'>
      <Navbar />
      <Page />
    </div>
  );
}

export default App;

// function NoPage() {
//   return <h2>No page at requested path</h2>;
// }