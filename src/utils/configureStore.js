import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from './middleware';
import reducers from '../reducers/main';

const configureStore = () => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(logger, thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = createStoreWithMiddleware(reducers);

  // store.subscribe(throttle(() => {
  //   saveState(store.getState());
  // }, 1000));

  return store;

};

export default configureStore;
