import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import middleware from './src/middleware';

import Routes from './src/routes';

const store = createStore(reducers, middleware);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
