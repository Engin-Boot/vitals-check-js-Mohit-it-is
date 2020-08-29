const staff_json = require('./staff_alert.json');

function alert(alertvitaltype){
    let vitaltype = Object.keys(alertvitaltype)[0];

    //console.log("Call" + " " + staff_json[vitaltype] + " bpm" + " " +alertvitaltype[vitaltype]);
}

module.exports = alert;