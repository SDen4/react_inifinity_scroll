import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from 'store/rootReducer';

export const usersListSelect = createSelector(
  (store: AppStateType) => store.main.usersList,
  (usersList) => usersList,
);

export const userSelect = createSelector(
  (store: AppStateType) => store.main.user,
  (user) => user,
);

export const loadingSelect = createSelector(
  (store: AppStateType) => store.main.loading,
  (loading) => loading,
);

export const pageSelect = createSelector(
  (store: AppStateType) => store.main.page,
  (page) => page,
);

export const endOfUsersListSelect = createSelector(
  (store: AppStateType) => store.main.endOfUsersList,
  (endOfUsersList) => endOfUsersList,
);
