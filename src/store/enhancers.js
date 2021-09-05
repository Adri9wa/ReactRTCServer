// Core
import { compose } from 'redux'; // Used to compose some other components to enhance store usability, docs: https://redux.js.org/api/compose

/**
 * In development mode add devtools for redux, it is useful for debugging
 * @returns Enhanced compose function
 */
export const composeEnhancers = () => {
    const dev = process.env.NODE_ENV === 'development';

    const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    return devtools && dev ? devtools : compose;
};
