// vendor
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// proj
import history from './history';

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = [ thunk, sagaMiddleware, routerMiddleware ];

/** redux-logger imported inside if statement to prevent it from being injected into a bundle */
if (/*__LOCAL__ || __DEV__*/ true) { //TODO Create .env
    const { createLogger } = require("redux-logger");

    const logger = createLogger({
        duration:  true,
        timestamp: true,
        collapsed: true,
        diff:      true,
        colors:    {
            title:     () => 'deepskyblue',
            prevState: () => 'dodgerblue',
            action:    () => 'greenyellow',
            nextState: () => 'OliveDrab',
            error:     () => 'firebrick',
        },
    });

    middleware.push(logger);
}

export { sagaMiddleware, middleware };
