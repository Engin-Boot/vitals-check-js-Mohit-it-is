const isvitalok = require('./vital_validator');

function bool_return(flag){
    if(flag === false){
        return false;
    }
    return true;
}

function vitalsAreOk(vitalvalues){
    let flag = true;
    for (const [key,value] of Object.entries(vitalvalues)){
        flag = flag && isvitalok(key,value);
    }
    
    return bool_return(flag);   //..refactor to reduce cyclomatic complaxity
}

module.exports = vitalsAreOk;
require("./Unit_tester.js"); 