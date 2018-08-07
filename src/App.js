import React, {Component} from 'react';
import {Navbar} from "./components/Navbar";
import {Config} from "./modules/configuration/Config";
import {Container} from "./assets/styles/core/grid";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Container>
              <Config/>
          </Container>
      </div>
    );
  }
}

export default App;
