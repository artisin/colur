const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('End Him!', {
  endColor: true
});

module.exports = {
  exp: function (should) {
    should.equal(test.length, 66);
  }
};
