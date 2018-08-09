import {getPersistor} from "@rematch/persist";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupStore from './store'

const {store} = setupStore();
const persistor = getPersistor();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
