import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lightTheme, setLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

   useEffect(() => {
    if (lightTheme) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
    
    localStorage.setItem('darkTheme', JSON.stringify(lightTheme));
  }, [lightTheme]);
  return (
    <div className="App">
      Hello, Nowhere sn!
    </div>
  );
}

export default App;
