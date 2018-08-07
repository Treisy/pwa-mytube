import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import appRoutes from "./constants/appRoutes";
import {Config} from "./modules/configuration/Config";
import {Home} from "./modules/Home";
import {NotFound} from "./modules/NotFound";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path={appRoutes.app.HOME} component={Home}/>
            <Route path={appRoutes.app.CONFIG} component={Config} />
            <Route component={NotFound} />
          </Switch>
      </div>
    );
  }
}

export default App;
