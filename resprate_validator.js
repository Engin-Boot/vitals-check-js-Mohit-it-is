function check_respRate(respRate){
    if(respRate < 30 || respRate > 95){
        return false;
    }
    return true;
}
module.exports = check_respRate;