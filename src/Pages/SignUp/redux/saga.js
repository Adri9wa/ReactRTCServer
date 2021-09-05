// vendor
import { call, put, all, take, select } from 'redux-saga/effects';
import _ from 'lodash';

//proj

// own
import {

} from './duck';
// export function* fetchVehicleOrdersSaga() {
//     while (true) {
//         try {
//             yield take(FETCH_VEHICLE_ORDERS);

//             yield put(setFetchingVehicleOrders(true));

//             const vehicleId = yield select(selectExpandedVehicleId);

//             const sort = yield select(selectVehicleOrdersSort);

//             yield nprogress.start();

//             const {orders, stats} = yield call(fetchAPI, 'GET', `orders/vehicle/${vehicleId}`, {page: sort.page});

//             yield put(fetchVehicleOrdersSuccess({orders, stats}));
//         } catch (error) {
//             yield put(emitError(error));
//         } finally {
//             yield nprogress.done();
//             yield put(setFetchingVehicleOrders(false));
//         }
//     }
// }


export function* saga() {
    yield all([
        // call(fetchVehiclesSaga),
        // call(fetchVehicleOrdersSaga),
    ]);
}
