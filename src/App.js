import { useState, useEffect } from 'react'
import './App.css';
// import allGames from './games.js'
import Picker from './components/Picker';
import Finder from './components/Finder';
import Collection from './components/Collection';

function App() {

  return (
    <div className="App">
      <img src='../public/image_processing20201020-1513-1a7pmsx.gif' />
      <Picker />
      <Finder />
      {/* <Collection /> */}
    </div>
  );
}

export default App;
