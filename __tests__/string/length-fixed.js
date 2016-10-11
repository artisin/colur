const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('test');

module.exports = {
  exp: function () {
    return (test).length.should.be.exactly(48);
  }
};
