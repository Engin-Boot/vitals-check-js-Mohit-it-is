const alert_staff = require('./vital_breach_alerter');
function check_spo2(spo2){
    if(spo2 < 90) {
        alert_staff({spo2: "low spo2"})
        return false;
    }
    return true;
}
module.exports = check_spo2;