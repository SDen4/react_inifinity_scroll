import { createAction } from '@reduxjs/toolkit';

const main = 'MAIN';

export const searchUsersSaga = createAction<string>(
  `${main}/SEARCH_USERS_SAGA`,
);
