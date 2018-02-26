import {
  createStore as baseCreateStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { connectRoutes } from 'redux-first-router';
import { compose } from 'lodash/fp';

import routesMap from './routesMap';
import reducers from './reducers'

export default function createStore(history, initialState = {}) {
  const {
      reducer: routerReducer,
      middleware: routerMiddleware,
      enhancer: routerEnhancer,
  } = connectRoutes(history, routesMap)

  const rootReducer = combineReducers({
      location: routerReducer,
      ...reducers
  });

  const middleware = applyMiddleware(
      routerMiddleware
)

  const enhancers = compose(
      routerEnhancer,
      middleware
  );

  const store = baseCreateStore(
      rootReducer,
      initialState,
      enhancers
  );

  return store;
}
