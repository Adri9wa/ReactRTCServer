// vendor
import { call, all, take, select, put } from 'redux-saga/effects';

//proj
import { fetchAPI } from 'utils';

// own
import {
    FETCH_SMART_PLUG,
    setSmartPlug,
} from './duck';

export function* fetchSmartPlugSaga() {
    while (true) {
        try {
            const { payload: ID } = yield take(FETCH_SMART_PLUG);
            
            try {
                const response = yield call(fetchAPI, 'GET', `/getDevice/${ID}`);

                yield put(setSmartPlug(response));
            } catch (error) {
                console.error(error);
            }
            
        } catch (error) {
            console.log("Error while fetching: ", error);
        }
    }
}

export function* saga() {
    yield all([
        call(fetchSmartPlugSaga),
    ]);
}
