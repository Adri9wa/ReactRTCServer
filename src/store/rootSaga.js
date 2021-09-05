// vendor
import { all } from 'redux-saga/effects';

//own

import { saga as SignUp } from 'Pages/SignUp/redux/saga';

export default function* rootSaga() {
    yield all([
        SignUp(),
    ]);
}