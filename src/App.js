import { useState, useEffect } from 'react'
import './App.css';
import allGames from './games.js'
import Picker from './components/Picker';
import Finder from './components/Finder';

function App() {

  return (
    <div className="App">
      <Picker />
      <Finder />
    </div>
  );
}

export default App;
