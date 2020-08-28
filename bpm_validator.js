function check_bpm(bpm){
    if(bpm < 70 || bpm > 150) {
        return false;
    }
    return true;
}  
module.exports = check_bpm;