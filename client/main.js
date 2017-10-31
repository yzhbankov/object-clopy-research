import clone from 'clone';
import deepcopy from 'deepcopy';
import _ from 'lodash';

const LIBRARIES = {
    CLONE: 'CLONE',
    DEEPCOPY: 'DEEPCOPY',
    LODASH: 'LODASH',
    PARSE: 'PARSE'
};

const objectDepths = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function createObj(depth) {
    const obj = {};
    let i = 0;

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
    return obj;
}

function getCloneTime(obj, library) {
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

function cloneTimesForObjects() {
    const times = {};
    Object.keys(LIBRARIES).map(key => {
        times[key] = []
    });

    for (let i = 0; i < objectDepths.length; i++) {
        let obj = createObj(objectDepths[i]);
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
for(let i = 0; i < 5; i++) {
    console.log('TIMES ', cloneTimesForObjects());
}
/*function getAverageValue() {
    let sum = 0;
    const clonedObject = createObj()
    for (let i = 0; i < 4; i++) {
        sum += getCloneTime(obj, library);
    }
    console.log('Library:', library, ' ', sum / 4);
}*/