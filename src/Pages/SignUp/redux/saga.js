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
            try {
                console.log("JSON.stringify(payload): ", JSON.stringify(payload));
                // TODO create auto handling method for requests
                const response = yield call(fetch, 'http://127.0.0.1:8000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload),
                });

                const getJson = async (rawResponse) => {
                    return await rawResponse.json()
                }

                const jsonResult = yield call(getJson, response);

                console.log("Response: ", jsonResult);
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
