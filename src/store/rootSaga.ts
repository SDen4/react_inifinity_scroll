import { all, fork } from 'redux-saga/effects';

import { rootSearchSaga } from 'store/main/sagas/searchSaga';
import { rootScrollSaga } from 'store/scroll/sagas/scrollSaga';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(rootSearchSaga), fork(rootScrollSaga)]);
}
