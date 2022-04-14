// vendor
import { call, all, take, select, put } from 'redux-saga/effects';

//proj
import { fetchAPI } from 'utils';

// own
import {
    FETCH_SMART_PLUG, selectParametersFilters, setParameters,
    setSmartPlug,
} from './duck';

export function* fetchSmartPlugSaga() {
    while (true) {
        try {
            const { payload: ID } = yield take(FETCH_SMART_PLUG);
            const parametersFilters = yield select(selectParametersFilters);
            
            try {
                const plug = yield call(fetchAPI, 'GET', `/getDevice/${ID}`);
                const {dataList: parameters, stats} = yield call(fetchAPI, 'GET', `/devices/${ID}/getAllDeviceParameters`, parametersFilters);

                yield put(setSmartPlug(plug));
                yield put(setParameters({parameters, stats}));
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
