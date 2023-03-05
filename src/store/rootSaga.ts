import { all, fork } from 'redux-saga/effects';

import { rootScrollSaga } from 'store/main/sagas/scrollSaga';
import { rootSearchSaga } from 'store/main/sagas/searchSaga';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(rootSearchSaga), fork(rootScrollSaga)]);
}
