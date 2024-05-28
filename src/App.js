import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/main.js';
import TrackData from './components/TrackData.js';
import Logworkouts from './components/Logworkouts.js';
import Goals from './components/Goals.js';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Main');

  const handleNavClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className='body'>
      <Header onNavClick={handleNavClick} />
      {currentComponent === 'Main' ? <Main /> : null}
      {currentComponent === 'TrackData' ? <TrackData /> : null}
      {currentComponent === 'Logworkouts' ? <Logworkouts /> : null}
      {currentComponent === 'Goals' ? <Goals /> : null}
      <div className='maincontainer'></div>
    </div>
  );
}

export default App;
