import {ACTIONS} from '../../common/constants'


const initialState = {
    relativeTo: [],
    allData: null
};

export default function rootReducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case ACTIONS.GET_PARSE_DATA:
            return {...state, relativeTo: [...state.allData.parse]};
        case ACTIONS.GET_CLONE_DATA:
            return {...state, relativeTo: [...state.allData.clone]};
        case ACTIONS.GET_DEEPCOPY_DATA:
            return {...state, relativeTo: [...state.allData.deepcopy]};
        case ACTIONS.GET_LODASH_DATA:
            return {...state, relativeTo: [...state.allData.lodash]};
        case ACTIONS.GET_ALL_DATA:
            newState.allData = action.params;
            newState.relativeTo = action.params.parse;
            return newState;
        default:
            return state
    }
}