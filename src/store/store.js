// vendor
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

// own
import { middleware, sagaMiddleware } from './middleware';
import { composeEnhancers } from './enhancers';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const store = createStore(
    rootReducer,
    composeEnhancers()(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default store;

sagaMiddleware.run(rootSaga);
