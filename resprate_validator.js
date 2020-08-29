const alert_resprate = require('./vital_breach_alerter');
function check_respRate(respRate){
    if(respRate < 30){
        alert_resprate({"respRate":"low"});
        return false;
    }
    if(respRate > 95){
        alert_resprate({"respRate":"high"});
        return false;
    }
    return true;
}
module.exports = check_respRate;