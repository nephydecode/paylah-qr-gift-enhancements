import React from "react";
import "./App.css";
import Navibar from './components/Navbar';
import Welcome from './components/Welcome';
import Redemptions from './components/Redemptions';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Welcome/>
      <Redemptions/>
    </div>
  );
}

export default App;
