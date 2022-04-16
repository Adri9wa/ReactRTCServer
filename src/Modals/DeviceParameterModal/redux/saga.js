// vendor
import { call, all, take, select, put } from 'redux-saga/effects';

//proj
import { fetchAPI } from 'utils';

// own
import {
    FETCH_DEVICE_PARAMETER,
    setDeviceParameter,
    fetchDeviceParameter,
    selectDeviceParameter,
    UPDATE_DEVICE_PARAMETER, selectDeviceParameterUpdatedCallback,
} from './duck';

export function* fetchDeviceParameterSaga() {
    while (true) {
        try {
            const {payload: parameterID} = yield take(FETCH_DEVICE_PARAMETER);
            
            try {
                const response = yield call(fetchAPI, 'GET', `/deviceParameters/${parameterID}`);

                yield put(setDeviceParameter(response));
            } catch (error) {
                console.error(error);
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}

export function* updateDeviceParameterSaga() {
    while (true) {
        try {
            yield take(UPDATE_DEVICE_PARAMETER);
            const parameter = yield select(selectDeviceParameter);
            const parameterUpdatedCB = yield select(selectDeviceParameterUpdatedCallback);
            
            try {
                console.log('parameter to update: ', parameter);
                yield call(fetchAPI, 'POST', `/updateDeviceParameter/${parameter.id}`, {
                    type: parameter.type,
                    value: parameter.value,
                    key: parameter.key,
                }, null, {
                    removeEmptyStrings: false,
                });
                
                yield put(fetchDeviceParameter);
                
                if(parameterUpdatedCB) yield call(parameterUpdatedCB);
            } catch (error) {
                console.error(error);
            }
            
        } catch (error) {
            console.error(error);
        }
    }
}

export function* saga() {
    yield all([
        call(fetchDeviceParameterSaga),
        call(updateDeviceParameterSaga),
    ]);
}
