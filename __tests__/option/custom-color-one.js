const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const test = colur('Cool Custom Italic Colur!!!', {
  color: 'bgRed.blue.italic'
});


module.exports = {
  exp: function () {
    return (test).length.should.be.exactly(120);
  }
};