const check_respRate = require('./resprate_validator');
const check_bpm = require('./bpm_validator');

function check_bpm_and_respRate(bpm, respRate){
    if(check_bpm(bpm) === false) {
        return false;
    } if(check_respRate(respRate) === false){
        return false;
    }
    return true;
}
module.exports = check_bpm_and_respRate;
