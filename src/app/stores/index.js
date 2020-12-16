import { applyMiddleware, createStore } from 'redux';

import RootReducer from './RootReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, middleware);

export default store;
