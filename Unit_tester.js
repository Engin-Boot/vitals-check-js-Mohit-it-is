const expect = require('chai').expect;
const vitalsAreOk = require('./checker');

(function(){
    expect(vitalsAreOk(100, 95, 70)).to.be.true;
    expect(vitalsAreOk(50, 95, 70)).to.be.false;
    
    console.log('checker is done');

})();
