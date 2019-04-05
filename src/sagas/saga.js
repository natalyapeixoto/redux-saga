
import { takeLatest, put, takeEvery, all } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* ageUpAsync() {
    yield delay(4000)
    yield put({type:'AGE_UP_ASYNC', value: 1})
}

function* ageDownAsync() {
    yield delay(2000)
    yield put({type:'AGE_DOWN_ASYNC', value: 1})
}

export function* watchAgeDown() {
    yield takeEvery('AGE_DOWN', ageDownAsync)
}

export function* watchAgeUp(){
    yield takeLatest('AGE_UP', ageUpAsync)
}

export default function* rootSaga() {
    yield all([
      watchAgeUp(),
      watchAgeDown()
    ])
  }