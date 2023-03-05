import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from 'store/rootReducer';

export const loadingSelect = createSelector(
  (store: AppStateType) => store.scroll.loading,
  (loading) => loading,
);

export const pageSelect = createSelector(
  (store: AppStateType) => store.scroll.page,
  (page) => page,
);

export const endOfUsersListSelect = createSelector(
  (store: AppStateType) => store.scroll.endOfUsersList,
  (endOfUsersList) => endOfUsersList,
);
