const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('Cool Custom Rainbow Colur!!!', {
  color: 'rainbow'
});


module.exports = {
  exp: function (should) {
    should.equal(test.length, 120);
  }
};
