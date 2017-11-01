import { ACTIONS } from '../../common/constants'


const initialState = {
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_PARSE_DATA:
            console.log('asdsdfsfd', action)
            return [...action.params];
        default:
            return state
    }
}