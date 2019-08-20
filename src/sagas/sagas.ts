import {put, takeLatest, all} from 'redux-saga/effects'
import {SagaActions, SagaActionTypes} from "../store/types";
import * as actions from '../store/actions'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* increment(action: SagaActions) {
    yield delay(1000);
    yield put(actions.incrementReducer(action.count));
}

function* decrement(action: SagaActions) {
    yield delay(1000);
    yield put(actions.decrementReducer(action.count));
}

function* watchActions() {
    yield takeLatest(SagaActionTypes.INCREMENT, increment);
    yield takeLatest(SagaActionTypes.DECREMENT, decrement);
}

function* rootSaga() {
    yield all([
        watchActions()
    ]);
}

export default rootSaga;
