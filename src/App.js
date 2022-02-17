import { useState, useEffect } from 'react'
import './App.css';
import allGames from './games.js'
import Picker from './components/Picker';

function App() {

  return (
    <div className="App">
      <Picker />
    </div>
  );
}

export default App;
