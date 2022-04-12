/** Constants **/
export const moduleName = 'devices';
const prefix = `pages/${moduleName}`;

export const FETCH_DEVICES = `${prefix}/FETCH_DEVICES`;
export const SET_DEVICES = `${prefix}/SET_DEVICES`;

/** Reducer **/
const ReducerState = {
    devices:    [],
};

export default function reducer(state = ReducerState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_DEVICES:
            return {
                ...state,
                devices: payload,
            };
            
        default: return state;
    }
}

/** Selectors **/
export const selectDevices = (state) => state[moduleName].devices;

/** Action Creators **/
export const fetchDevices = () => ({
    type: FETCH_DEVICES,
});

export const setDevices = (value) => ({
    type: SET_DEVICES,
    payload: value,
});