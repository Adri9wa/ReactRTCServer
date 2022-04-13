/** Constants **/
export const moduleName = 'smartPlugControl';
const prefix = `pages/${moduleName}`;

export const FETCH_SMART_PLUG = `${prefix}/FETCH_SMART_PLUG`;
export const SET_SMART_PLUG = `${prefix}/SET_SMART_PLUG`;

/** Reducer **/
const ReducerState = {
    smartPlug:    {},
};

export default function reducer(state = ReducerState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_SMART_PLUG:
            return {
                ...state,
                smartPlug: payload,
            };
            
        default: return state;
    }
}

/** Selectors **/
export const selectSmartPlug = (state) => state[moduleName].smartPlug;

/** Action Creators **/
export const fetchSmartPlug = (id) => ({
    type: FETCH_SMART_PLUG,
    payload: id,
});

export const setSmartPlug = (value) => ({
    type: SET_SMART_PLUG,
    payload: value,
});