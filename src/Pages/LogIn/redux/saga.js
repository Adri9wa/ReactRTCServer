// vendor
import { call, all, take, select, put } from 'redux-saga/effects';
import _ from 'lodash';

//proj
import { fetchAPI } from 'utils';
import {
    setAuthToken,
    setUser,
    setUserFetching,
} from 'Common/redux/duck';

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
            yield put(setUserFetching(true));

            const login = yield select(selectLogin);
            const password = yield select(selectPassword);

            const query = {
                login,
                password,
            };

            try {
                const response = yield call(fetchAPI, 'POST', '/log_in', null, query);

                yield put(setUser(_.get(response, 'user')));
                yield put(setAuthToken(_.get(response, 'token')));

                console.log("response: ", response);
            } catch (error) {
                console.error(error);
            } finally {
                yield put(setUserFetching(false));
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
