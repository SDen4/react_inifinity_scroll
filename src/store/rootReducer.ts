import { combineReducers } from '@reduxjs/toolkit';

import { mainReducer } from 'store/main/reducer';
import { scrollReducer } from 'store/scroll/reducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  scroll: scrollReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
