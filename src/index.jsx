// @format
// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import PostIndex from './components/post_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootEl = document.querySelector('.container');
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type');
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  rootEl
);
