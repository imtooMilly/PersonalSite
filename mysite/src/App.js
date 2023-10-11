import './App.css';
import React from 'react'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

function NoPage() {
  return <h2>No page at requested path</h2>;
}
