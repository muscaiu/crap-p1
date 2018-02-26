import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import createStore from './store/createStore'
import App from './App'

const browserHistory = createBrowserHistory({});

const store = createStore(browserHistory);

function renderApp() {
    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    );

    render(app, document.getElementById('root'));
}

persistStore(
    store,
    {},
    () => renderApp()
);