const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('Oh fuck, a serious fucking Error!', {
  error: true
});

module.exports = {
  exp: function (should) {
    should.equal(test.length, 138);
  }
};
