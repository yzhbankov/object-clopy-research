import clone from 'clone';
import deepcopy from 'deepcopy';
import _ from 'lodash';
import {LIBRARIES} from './../common/constants';
export const createObject = (depth, width) => {
    const obj = {};
    let i = 0;
    if (depth) {
        function level(obj) {
            while (i < depth) {
                if (Object.keys(obj).length === 0) {
                    obj.a = {};
                }
                i++;
                level(obj.a)
            }
        }

        level(obj);
    } else if (width) {
        while (i < width) {
            obj[i] = 'Property' + i;
            i++;
        }
    }
    return obj;
};

export const getCloneTime = (obj, library) => {
    const start = new Date().getTime();
    for (let i = 0; i < 10000; i++) {
        if (library === LIBRARIES.PARSE) {
            JSON.parse(JSON.stringify(obj));
        } else if (library === LIBRARIES.CLONE) {
            clone(obj);
        } else if (library === LIBRARIES.DEEPCOPY) {
            deepcopy(obj);
        } else if (library === LIBRARIES.LODASH) {
            _.cloneDeep(obj);
        }
    }
    const end = new Date().getTime();
    return end - start;
}
