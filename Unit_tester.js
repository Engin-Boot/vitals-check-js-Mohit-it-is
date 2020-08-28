const expect = require('chai').expect;
const vitalsAreOk = require('./checker');

(function(){
    expect(vitalsAreOk(100, 95, 70)).to.be.true;
    expect(vitalsAreOk(50, 95, 70)).to.be.false;
    expect(vitalsAreOk(160, 95, 70)).to.be.false;
    expect(vitalsAreOk(100, 50, 70)).to.be.false;
    expect(vitalsAreOk(100, 95, 25)).to.be.false;
    expect(vitalsAreOk(100, 95, 100)).to.be.false;
    
    console.log('checker is done');

})();
