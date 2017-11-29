import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const initStore = (initialStore = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware;

  if (process.env.NODE_ENV === 'production') {
    middleware = applyMiddleware(sagaMiddleware);
  } else {
    middleware = window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
      ? compose(
        applyMiddleware(sagaMiddleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
      )
      : compose(applyMiddleware(sagaMiddleware, logger));
  }

  const store = createStore(
    rootReducer,
    initialStore,
    middleware
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};

export default initStore;
