import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store/ReduxStore';
import MainRouter from './app/routes/MainRouter';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <Provider store={store}>
        <MainRouter />
    </Provider>,
);
