const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('Oh fuck, an Error!', {
  consoleType: 'error',
  color: 'bgRed.white.bold'
});

module.exports = {
  exp: function () {
    return (test).length.should.be.exactly(102);
  }
};
