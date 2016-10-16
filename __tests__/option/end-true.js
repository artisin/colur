const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('End Him! Shorthand.', {
  end: true
});

module.exports = {
  exp: function (should) {
    should.equal(test.length, 102);
  }
};
