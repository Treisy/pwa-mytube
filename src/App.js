import React, { Component } from 'react';
import { Navbar } from "./components/Navbar";
import './App.css';


const API_KEY = 'AIzaSyDCZcgzhrx0RZXDfDNkSF_nMjgPcVKuiwc';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar/>
      </div>
    );
  }
}

export default App;
