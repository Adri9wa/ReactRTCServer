// vendor
import { all } from 'redux-saga/effects';

//proj
import Common from 'Common/redux/saga';

import { saga as SignUp } from 'Pages/SignUp/redux/saga';
import { saga as LogIn } from 'Pages/LogIn/redux/saga';

export default function* rootSaga() {
    yield all([
        Common(),
        SignUp(),
        LogIn(),
    ]);
}