//import Promise from 'bluebird';
import {ACTIONS, LIBRARIES} from './../../common/constants';
import {createObject, getCloneTime} from './../../utils';

const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34/*, 55, 89, 144, 233, 377, 610, 987*/];

export const getJsonParseData = () => (dispatch) => {
    new Promise((resolve, reject) => {
        const data = [];
        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.push(getCloneTime(newObject, LIBRARIES.PARSE));
        }
        dispatch({
            type: ACTIONS.GET_PARSE_DATA,
            params: data
        });

    })
};

export const getCloneData = () => (dispatch) => {
    new Promise((resolve, reject) => {
        const data = [];
        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.push(getCloneTime(newObject, LIBRARIES.CLONE));
        }
        dispatch({
            type: ACTIONS.GET_CLONE_DATA,
            params: data
        });

    })
};

export const getDeepCopyData = () => (dispatch) => {
    new Promise((resolve, reject) => {
        const data = [];
        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.push(getCloneTime(newObject, LIBRARIES.DEEPCOPY));
        }
        dispatch({
            type: ACTIONS.GET_DEEPCOPY_DATA,
            params: data
        });

    })
};

export const getLodashData = () => (dispatch) => {
    new Promise((resolve, reject) => {
        const data = [];
        for (let i = 0; i<objectDepths.length; i++){
            const newObject = createObject(objectDepths[i]);
            data.push(getCloneTime(newObject, LIBRARIES.LODASH));
        }
        dispatch({
            type: ACTIONS.GET_LODASH_DATA,
            params: data
        });

    })
};

/*function cloneTimesForObjects() {
    const times = {};
    Object.keys(LIBRARIES).map(key => {
        times[key] = []
    });

    for (let i = 0; i < objectDepths.length; i++) {
        let obj = createObj(null, objectDepths[i]);
        times[LIBRARIES.PARSE].push(getCloneTime(obj, LIBRARIES.PARSE));
        times[LIBRARIES.CLONE].push(getCloneTime(obj, LIBRARIES.CLONE));
        times[LIBRARIES.DEEPCOPY].push(getCloneTime(obj, LIBRARIES.DEEPCOPY));
        times[LIBRARIES.LODASH].push(getCloneTime(obj, LIBRARIES.LODASH));
    }

    return times;
}

const times = {};
Object.keys(LIBRARIES).map(key => {
    times[key] = []
});
for (let i = 0; i < 5; i++) {
    console.log('TIMES ', cloneTimesForObjects());
}*/
/*function getAverageValue() {
    let sum = 0;
    const clonedObject = createObj()
    for (let i = 0; i < 4; i++) {
        sum += getCloneTime(obj, library);
    }
    console.log('Library:', library, ' ', sum / 4);
}*/