import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';

export default () => {
    // middleware config
    const middleware = applyMiddleware(reduxLogger);

    const store = createStore(rootReducer, middleware);

    return store;
}