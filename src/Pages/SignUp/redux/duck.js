/** Constants **/
export const moduleName = 'signUp';
const prefix = `pages/${moduleName}`;

export const SET_LOGIN = `${prefix}/SET_LOGIN`;
export const SET_PASSWORD = `${prefix}/SET_PASSWORD`;
export const SET_NICKNAME = `${prefix}/SET_NICKNAME`;

export const REGISTER_USER = `${prefix}/REGISTER_USER`;

/** Reducer **/
const ReducerState = {
    login:    "",
    password: "",
    nickname: "",
};

export default function reducer(state = ReducerState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_LOGIN:
            return {
                ...state,
                login: payload,
            };

        case SET_PASSWORD:
            return {
                ...state,
                password: payload,
            };
        case SET_NICKNAME:
            return {
                ...state,
                nickname: payload,
            };

        default: return state;
    }
}

/** Selectors **/
export const selectLogin = (state) => state[moduleName].login;
export const selectPassword = (state) => state[moduleName].password;
export const selectNickname = (state) => state[moduleName].nickname;

/** Action Creators **/
export const setLogin = (value) => ({
    type: SET_LOGIN,
    payload: value,
});
export const setPassword = (value) => ({
    type: SET_PASSWORD,
    payload: value,
});
export const setNickname = (value) => ({
    type: SET_NICKNAME,
    payload: value,
});
export const registerUser = () => ({
    type: REGISTER_USER,
});
