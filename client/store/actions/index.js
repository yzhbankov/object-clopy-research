//import Promise from 'bluebird';
import {ACTIONS, LIBRARIES} from './../../common/constants';
import {createObject, getCloneTime} from './../../utils';

const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34/*, 55, 89, 144, 233, 377, 610, 987*/];

export const getJsonParseData = () => (dispatch) => {
        dispatch({
            type: ACTIONS.GET_PARSE_DATA
        });
};

export const getCloneData = () => (dispatch) => {
        dispatch({
            type: ACTIONS.GET_CLONE_DATA
        });
};

export const getDeepCopyData = () => (dispatch) => {
        dispatch({
            type: ACTIONS.GET_DEEPCOPY_DATA
        });
};

export const getLodashData = () => (dispatch) => {
        dispatch({
            type: ACTIONS.GET_LODASH_DATA
        });
};

export const getAllData = () => (dispatch) => {
    new Promise((resolve, reject) => {
        const data = {clone:[], lodash:[], deepcopy:[], parse:[]};
        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.deepcopy.push(getCloneTime(newObject, LIBRARIES.DEEPCOPY));
        }

        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.lodash.push(getCloneTime(newObject, LIBRARIES.LODASH));
        }

        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.clone.push(getCloneTime(newObject, LIBRARIES.CLONE));
        }

        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.parse.push(getCloneTime(newObject, LIBRARIES.PARSE));
        }

        dispatch({
            type: ACTIONS.GET_ALL_DATA,
            params: data
        });

    })
};