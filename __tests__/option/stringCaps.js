const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('No String caps', {
  stringCaps: false
});

module.exports = {
  exp: function (should) {
    const hasCaps = (/\|>|<\|/gm).test(test);
    should.equal(hasCaps, false);
  }
};
