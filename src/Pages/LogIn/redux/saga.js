// vendor
import { call, all, take, select } from 'redux-saga/effects';
// import _ from 'lodash';

//proj
import { fetchAPI } from 'utils';

// own
import {
    LOG_IN,

    selectLogin,
    selectPassword,
} from './duck';

export function* registerUserSaga() {
    while (true) {
        try {
            yield take(LOG_IN);

            const login = yield select(selectLogin);
            const password = yield select(selectPassword);

            const query = {
                login,
                password,
            };

            try {
                const response = yield call(fetchAPI, 'GET', '/log_in', query);
                console.log("response: ", response);
            } catch (error) {
                console.error(error);
            }
            
        } catch (error) {
            console.log("Error while log in: ", error);
        }
    }
}

export function* saga() {
    yield all([
        call(registerUserSaga),
    ]);
}
