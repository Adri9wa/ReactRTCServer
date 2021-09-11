// vendor
import { all } from 'redux-saga/effects';

//own

import { saga as SignUp } from 'Pages/SignUp/redux/saga';
import { saga as LogIn } from 'Pages/LogIn/redux/saga';

export default function* rootSaga() {
    yield all([
        SignUp(),
        LogIn(),
    ]);
}