import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {VideoPlayer} from "./components/VideoPlayer";
import appRoutes from "./constants/appRoutes";
import {Config} from "./modules/configuration/Config";
import {Home} from "./modules/Home";
import {NotFound} from "./modules/NotFound";
import 'normalize.css/normalize.css';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import {VideoWithList} from "./modules/VideoWithList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={appRoutes.app.HOME} component={Home}/>
            <Route path={appRoutes.app.CONFIG} component={Config} />
            <Route path={appRoutes.app.VIDEO_PLAYER} component={VideoWithList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
