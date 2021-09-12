// vendor
import { all } from 'redux-saga/effects';

//own

import { saga as user } from './user/saga';

export default function* saga() {
    yield all([
        user(),
    ]);
}