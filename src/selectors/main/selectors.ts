import { createSelector } from '@reduxjs/toolkit';

import type { AppStateType } from 'store/rootReducer';

export const usersListSelect = createSelector(
  (store: AppStateType) => store.main.usersList,
  (usersList) => usersList,
);

export const userSelect = createSelector(
  (store: AppStateType) => store.main.user,
  (user) => user,
);
