import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { InfinityScroll } from 'hocs/InfinityScroll';

import { App } from 'view';

import { store } from 'store/store';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const WithScroll = () => {
  const Scroll = InfinityScroll(App as any);
  return <Scroll />;
};

root.render(
  <Provider store={store}>
    <WithScroll />
  </Provider>,
);
