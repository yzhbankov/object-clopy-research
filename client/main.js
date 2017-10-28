var clone = require('clone');
var deepcope = require('deepcopy');
var _ = require('lodash')
const obj = {};

function createObj(depth){

    let i = 0;
    function level(obj){
        while(i< depth){
            if (Object.keys(obj).length === 0){
                obj.a = {};
            }
            i++;
            level(obj.a)
        }
    }
    level(obj);
}

createObj(200);
let timeDiff = 0;
let sum = 0;
function getTime(obj) {
    const start = new Date().getTime();
    for (let i = 0; i < 10000; i++) {
        //JSON.parse(JSON.stringify(obj));
        //clone(obj);
        //deepcope(obj);
        _.cloneDeep(obj);
    }
    const end = new Date().getTime();
    timeDiff = end - start;
    sum+=timeDiff
    console.log('Execution time: ' + timeDiff);
}

for(let i = 0; i < 10; i++){

    getTime(obj);
}
console.log(sum / 10);