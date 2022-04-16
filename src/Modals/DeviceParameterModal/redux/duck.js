/** Constants **/
export const moduleName = 'deviceParameterModal';
const prefix = `modals/${moduleName}`;

export const FETCH_DEVICE_PARAMETER = `${prefix}/FETCH_DEVICE_PARAMETER`;
export const SET_DEVICE_PARAMETER = `${prefix}/SET_DEVICES`;
export const SET_DEVICE_PARAMETER_UPDATED_CB = `${prefix}/SET_DEVICE_PARAMETER_UPDATED_CB`;
export const SET_DEVICE_PARAMETER_CREATED_CB = `${prefix}/SET_DEVICE_PARAMETER_CREATED_CB`;
export const UPDATE_DEVICE_PARAMETER = `${prefix}/UPDATE_DEVICE_PARAMETER`;
export const CREATE_DEVICE_PARAMETER = `${prefix}/CREATE_DEVICE_PARAMETER`;

/** Reducer **/
const ReducerState = {
    deviceParameter:    {
        key: "",
        value: "",
        type: "CUSTOM"
    },
    deviceParameterUpdatedCB: (() => {}),
    deviceParameterCreatedCB: (() => {}),
};

export default function reducer(state = ReducerState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_DEVICE_PARAMETER:
            return {
                ...state,
                deviceParameter: {
                    ...state.deviceParameter,
                    ...payload
                },
            };
        case SET_DEVICE_PARAMETER_UPDATED_CB:
            return {
                ...state,
                deviceParameterUpdatedCB: payload,
            };
        case SET_DEVICE_PARAMETER_CREATED_CB:
            return {
                ...state,
                deviceParameterCreatedCB: payload,
            };
            
        default: return state;
    }
}

/** Selectors **/
export const selectDeviceParameter = (state) => state[moduleName].deviceParameter;
export const selectDeviceParameterUpdatedCallback = (state) => state[moduleName].deviceParameterUpdatedCB;
export const selectDeviceParameterCreatedCallback = (state) => state[moduleName].deviceParameterCreatedCB;

/** Action Creators **/
export const fetchDeviceParameter = (parameterID) => ({
    type: FETCH_DEVICE_PARAMETER,
    payload: parameterID
});

export const setDeviceParameter = (parameter) => ({
    type: SET_DEVICE_PARAMETER,
    payload: parameter,
});

export const setDeviceParameterUpdatedCallback = (callback) => ({
    type: SET_DEVICE_PARAMETER_UPDATED_CB,
    payload: callback,
});

export const setDeviceParameterCreatedCallback = (callback) => ({
    type: SET_DEVICE_PARAMETER_CREATED_CB,
    payload: callback,
});

export const updateDeviceParameter = () => ({
    type: UPDATE_DEVICE_PARAMETER,
});

export const createDeviceParameter = (deviceID) => ({
    type: CREATE_DEVICE_PARAMETER,
    payload:deviceID
});