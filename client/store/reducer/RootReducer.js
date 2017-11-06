import {ACTIONS} from '../../common/constants'


const initialState = {
    parseData: [],
    cloneData: [],
    deepCopyData: [],
    lodashData: [],
    allData: null
};

export default function rootReducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case ACTIONS.GET_PARSE_DATA:
            newState.parseData = action.params;
            return newState;
        case ACTIONS.GET_CLONE_DATA:
            newState.cloneData = action.params;
            return newState;
        case ACTIONS.GET_DEEPCOPY_DATA:
            newState.deepCopyData = action.params;
            return newState;
        case ACTIONS.GET_LODASH_DATA:
            newState.lodashData = action.params;
            return newState;
        case ACTIONS.GET_ALL_DATA:
            newState.allData = action.params;
            return newState;
        default:
            return state
    }
}