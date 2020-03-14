import React from "react";
import "./App.css";

import NavBar from "./components/layout/NavBar";

import FetchData from "./components/Cards/FetchData";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <FetchData/>
      
    </div>
  );
}

export default App;


