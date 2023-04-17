import type { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { searchUsersSaga } from 'store/main/actions';
import { userAct, usersListAct } from 'store/main/reducer';
import { endOfUsersListAct, resetAct } from 'store/scroll/reducer';

import { httpRequest } from 'api/httpRequest';

import type { AllDataType } from 'model/types';

import { usersPerRequest } from 'constants/index';

function* searchUsersWorker({ payload }: ReturnType<typeof searchUsersSaga>) {
  try {
    yield put(resetAct());
    yield put(userAct(payload));

    const allData: AllDataType = yield httpRequest(payload);

    if (allData.items.length < usersPerRequest) {
      yield put(endOfUsersListAct(true));
    }

    yield put(usersListAct(allData?.items));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* rootSearchSaga(): SagaIterator {
  [yield takeEvery(searchUsersSaga, searchUsersWorker)];
}
