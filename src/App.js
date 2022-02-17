import './App.css';
import Picker from './components/Picker';
import Finder from './components/Finder';
import tokenGen from './tokenGen';
const axios = require('axios')

function App() {

  // const urlParams = new URLSearchParams(queryString)
  // const code = urlParams("code")
  // console.log(code)


  return (
    <div className="App">
      {/* <a href="https://api.boardgameatlas.com/oauth/authorize?response_type=code&client_id=tub0iinjUh&redirect_uri=https://gamepicker.netlify.app/&state=true">Login to Board Game Atlas</a> */}
      <Picker />
      <Finder />
    </div>
  );
}

export default App;
