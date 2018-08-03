import React, { Component } from 'react';
import { Navbar } from "./components/Navbar";
import {VideoList} from "./components/VideoList";
import './App.css';


const API_KEY = 'AIzaSyDCZcgzhrx0RZXDfDNkSF_nMjgPcVKuiwc';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar/>
          <VideoList/>
      </div>
    );
  }
}

export default App;
