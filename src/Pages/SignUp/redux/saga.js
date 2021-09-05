// vendor
import { call, put, all, take, select } from 'redux-saga/effects';
import _ from 'lodash';

//proj

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
            console.log("Registering!!!: ", payload);
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
