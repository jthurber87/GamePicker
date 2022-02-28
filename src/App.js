import { useState, useEffect } from 'react'
import './App.css';
// import allGames from './games.js'
import Picker from './components/Picker';
import Finder from './components/Finder';
import Collection from './components/Collection';

function App() {

  return (
    <div className="App">
      <Picker />
      <Finder />
      {/* <Collection /> */}
    </div>
  );
}

export default App;
