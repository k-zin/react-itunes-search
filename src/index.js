import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MusicSearch from './MusicSearch';
import musicRootReducer from './reducers/musicRootReducer';

const store = createStore(musicRootReducer)

ReactDOM.render(
  <Provider store={store}>
    <MusicSearch />
  </Provider>,
  document.getElementById('root')
);