const alert_bpm = require('./vital_breach_alerter');

function check_bpm(bpm){
    if(bpm < 70){
        alert_bpm({"bpm":"low"});
        return false;
    }
    if(bpm > 150){
        alert_bpm({"bpm":"high"});
        return false;
    }
    return true;
}

module.exports = check_bpm;