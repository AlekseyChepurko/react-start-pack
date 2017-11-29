import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import initStore, { history } from './ducks/store';
import SagasManager from './ducks/helpers/sagasManager';

import Routes from './Routes'; // eslint-disable-line

const store = initStore({});
store.runSaga(SagasManager.getRootSaga());

//
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <Component history={ history } />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};
render(Routes);


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./', () => { render(Routes); });
}
