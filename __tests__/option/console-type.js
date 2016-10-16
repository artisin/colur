const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('Oh fuck, an Error!', {
  consoleType: 'error',
  color: 'bgRed.white.bold'
});

module.exports = {
  exp: function (should) {
    should.equal(test.length, 102);
  }
};
