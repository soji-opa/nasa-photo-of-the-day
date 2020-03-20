import React from "react";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import Footer from './components/layout/Footer'

import {Switch, Route} from 'react-router-dom';

import FetchData from "./components/Cards/FetchData";
import DonkiData from "./components/Cards/DonkiData"

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path="/" component={FetchData}/>
      <Route path="/donki" component={DonkiData}/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;


