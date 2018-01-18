
import 'react-hot-loader/patch';

import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Persist from './persist.jsx';
import HotPersist from './persist.jsx';



const render = () => (
  ReactDom.render(
    (
      <Persist />
    ), document.getElementById('app')
  )
);

render(render);
if (module.hot) {
  module.hot.accept('./persist.jsx', () => {
    ReactDom.render(
      (
        <AppContainer>
          <HotPersist />
        </AppContainer>
      ), document.getElementById('app')
    )
  });
}
