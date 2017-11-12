//import Promise from 'bluebird';
import {ACTIONS, LIBRARIES} from './../../common/constants';
import {createObject, getCloneTime} from './../../utils';

const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89/*, 144, 233, 377, 610, 987*/];

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
        const m = 10;
        for (let j = 0; j < m; j++) {

            for (let i = 0; i < objectDepths.length; i++) {
                const newObject = createObject(false, objectDepths[i]);
                data.deepcopy[i] = !data.deepcopy[i] ? getCloneTime(newObject, LIBRARIES.DEEPCOPY) : data.deepcopy[i] + getCloneTime(newObject, LIBRARIES.DEEPCOPY);
                data.lodash[i] = !data.lodash[i] ? getCloneTime(newObject, LIBRARIES.LODASH) : data.lodash[i] + getCloneTime(newObject, LIBRARIES.LODASH);
                data.clone[i] = !data.clone[i] ? getCloneTime(newObject, LIBRARIES.CLONE) : data.clone[i] + getCloneTime(newObject, LIBRARIES.CLONE);
                data.parse[i] = !data.parse[i] ? getCloneTime(newObject, LIBRARIES.PARSE) : data.parse[i] + getCloneTime(newObject, LIBRARIES.PARSE);
            }
        }

        data.parse = data.parse.map(parse => parse / m);
        data.clone = data.clone.map(clone => clone / m);
        data.lodash = data.lodash.map(lodash => lodash / m);
        data.deepcopy = data.deepcopy.map(deepcopy => deepcopy / m);
        console.log(data);
        dispatch({
            type: ACTIONS.GET_ALL_DATA,
            params: data
        });

    })
};