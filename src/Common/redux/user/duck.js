//proj
import { mainModuleName } from 'Common/redux/duck';

/** Constants **/
export const moduleName = 'user';
const prefix = `common/${moduleName}`;

export const SET_USER = `${prefix}/SET_USER`;
export const SET_USER_FETCHING = `${prefix}/SET_USER_FETCHING`;
export const SET_AUTH_TOKEN = `${prefix}/SET_AUTH_TOKEN`;
export const LOG_OUT = `${prefix}/LOG_OUT`;

/** Reducer **/
const ReducerState = {
    user:         {},
    userFetching: false,
    authToken:    undefined,
};

export default function reducer(state = ReducerState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload,
            };
        case SET_USER_FETCHING:
            return {
                ...state,
                userFetching: payload,
            };
        case SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: payload,
            };
        case LOG_OUT:
            return ReducerState;


        default: return state;
    }
}

/** Selectors **/
export const selectUser = (state) => state[mainModuleName][moduleName].user;
export const selectUserFetching = (state) => state[mainModuleName][moduleName].userFetching;
export const selectAuthToken = (state) => state[mainModuleName][moduleName].authToken;

/** Action Creators **/
export const setUser = (value) => ({
    type:    SET_USER,
    payload: value,
});
export const setUserFetching = (value) => ({
    type:    SET_USER_FETCHING,
    payload: value,
});

/**
 * Set authentication token which will be used for other requests
 * @param {*} value - JWT (JsonWebToken)
 */
export const setAuthToken = (value) => ({
    type:    SET_AUTH_TOKEN,
    payload: value,
});

export const logOut = (value) => ({
    type:    LOG_OUT,
    payload: value,
});