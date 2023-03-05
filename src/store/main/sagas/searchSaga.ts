import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { searchUsersSaga } from '../actions';
import { loadingAct, userAct, usersListAct } from '../reducer';

import { httpRequest } from 'api/httpRequest';

import { AllDataType } from 'model/types';

function* searchUsersWorker({ payload }: ReturnType<typeof searchUsersSaga>) {
  yield put(loadingAct(true));
  try {
    yield put(userAct(payload));

    const allData: AllDataType = yield httpRequest(payload);

    yield put(usersListAct(allData?.items));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(loadingAct(false));
  }
}

export function* rootSearchSaga(): SagaIterator {
  [yield takeEvery(searchUsersSaga, searchUsersWorker)];
}
