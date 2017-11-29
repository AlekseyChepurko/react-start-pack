import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';

export const history = createHistory();

const initStore = (initialStore = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware;

  if (process.env.NODE_ENV === 'production') {
    middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));
  } else {
    middleware = window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line
      ? compose(applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        logger
      ), window.__REDUX_DEVTOOLS_EXTENSION__()) // eslint-disable-line
      : compose(applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history), logger
      ));
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
