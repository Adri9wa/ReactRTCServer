// vendor
import { call, all, take, select } from 'redux-saga/effects';
// import _ from 'lodash';

//proj
import { fetchAPI } from 'utils';

// own
import {
    REGISTER_USER,

    selectLogin,
    selectPassword,
    selectNickname,
} from './duck';

export function* registerUserSaga() {
    while (true) {
        try {
            yield take(REGISTER_USER);

            const login = yield select(selectLogin);
            const password = yield select(selectPassword);
            const nickname = yield select(selectNickname);

            const payload = {
                login,
                password,
                nickname,
            };

            try {
                const response = yield call(fetchAPI, 'POST', '/users', null, payload);
                console.log("response: ", response);
            } catch (error) {
                console.error(error);
            }
            
        } catch (error) {
            console.log("Error while registering a new user: ", error);
        }
    }
}

export function* saga() {
    yield all([
        call(registerUserSaga),
    ]);
}
