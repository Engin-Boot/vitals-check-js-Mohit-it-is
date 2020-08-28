function check_spo2(spo2){
    if(spo2 < 90) {
        return false;
    }
    return true;
}
module.exports = check_spo2;