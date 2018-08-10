import 'normalize.css/normalize.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import appRoutes from "./constants/appRoutes";
import {Config} from "./modules/configuration/Config";
import {Home} from "./modules/Home";
import {NotFound} from "./modules/NotFound";
import {VideoWithList} from "./modules/VideoWithList";
import {connect} from 'react-redux';


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

const mapState = state => ({
  video: state.video
});

export default connect(mapState)(App);
