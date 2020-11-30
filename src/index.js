import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App/App';
import reducers from './reducers';
import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'));


