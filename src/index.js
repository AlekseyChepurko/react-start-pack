import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import initStore from './ducks/store';
import SagasManager from './ducks/helpers/sagasManager';
import { App } from './App';

const store = initStore({});
store.runSaga(SagasManager.getRootSaga());

//
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};
render(App);


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
