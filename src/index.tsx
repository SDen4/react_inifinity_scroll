import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { App } from 'view/App';

import { rootSaga } from 'store/rootSaga';
import mainReducer from 'store/main/reducers/reducer';

import './index.css';

const sagaMiddleWare = createSagaMiddleware();

const reducers = { main: mainReducer };

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleWare.run(rootSaga);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// @ts-ignore
export type AppStateType = ReturnType<typeof reducers>;
