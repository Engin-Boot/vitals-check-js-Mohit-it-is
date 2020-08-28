const check_spo2 = require('./spo2_validator');
const check_bpm_and_respRate = require('./bpm_reprate_combined_validator');

function vitalsAreOk(bpm, spo2, respRate) {
    if(check_bpm_and_respRate(bpm,respRate) === false) {
        return false;
    } if(check_spo2(spo2) === false) {
        return false;
    } 
    return true;
}

module.exports = vitalsAreOk;
require("./Unit_tester.js");   //testing