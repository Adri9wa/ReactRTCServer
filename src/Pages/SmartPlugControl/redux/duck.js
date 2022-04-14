/** Constants **/
export const moduleName = 'smartPlugControl';
const prefix = `pages/${moduleName}`;

export const FETCH_SMART_PLUG = `${prefix}/FETCH_SMART_PLUG`;
export const SET_SMART_PLUG = `${prefix}/SET_SMART_PLUG`;
export const SET_SMART_PLUG_PARAMETERS = `${prefix}/SET_SMART_PLUG_PARAMETERS`;

/** Reducer **/
const ReducerState = {
    smartPlug:    {},
    parametersFilters: {
        page: 1,
    },
    parameters:   [],
    parametersStats: {},
};

export default function reducer(state = ReducerState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_SMART_PLUG:
            return {
                ...state,
                smartPlug: payload,
            };
        case SET_SMART_PLUG_PARAMETERS:
            return {
                ...state,
                parameters: payload.parameters,
                parametersStats: payload.parametersStats,
            };
            
        default: return state;
    }
}

/** Selectors **/
export const selectSmartPlug = (state) => state[moduleName].smartPlug;

export const selectParametersFilters = (state) => state[moduleName].parametersFilters;
export const selectParameters = (state) => state[moduleName].parameters;
export const selectParametersStats = (state) => state[moduleName].parametersStats;

/** Action Creators **/
export const fetchSmartPlug = (id) => ({
    type: FETCH_SMART_PLUG,
    payload: id,
});

export const setSmartPlug = (value) => ({
    type: SET_SMART_PLUG,
    payload: value,
});

export const setParameters = ({parameters, stats}) => ({
    type: SET_SMART_PLUG_PARAMETERS,
    payload: {parameters, stats},
});