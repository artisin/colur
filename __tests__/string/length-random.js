const path  = require('path'),
      colur = require(path.join(process.cwd(), 'dist/colur.js'));

const randomString = function (len) {
  let str = '';
  for(let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * 62);
    const charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
    str += String.fromCharCode(charCode);
  }
  return str;
};

const resLength = [];
for (let i = 0; i < 25; i++) {
  resLength.push(colur(randomString(Math.floor(Math.random() * 100) + 1)).length);
}


module.exports = {
  exp: function (should) {
    resLength.forEach(function (val) {
      val %= 3;
      should.equal(val, 0);
    });
  }
};
