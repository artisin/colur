const colors = require('colors'),
      reduce = require('lodash.reduce');

/**
 * The koolest of colur loggers
 * @param  {str} str    -> logger string
 * @param  {obj} option -> option object
 * @return {---}        -> logging magic + stylized string
 */
const colur = function (str = '', {
  color       = null,
  endColor    = false,
  end         = true,
  start       = false,
  startColor  = false,
  error       = false,
  consoleType = 'info',
  strReturn   = false,
  stringCaps  = true
} = {}) {
  //set defaults
  const startColorDefault = colors.bgBlue.white.bold;
  const endColorDefault   = colors.bgGreen.white.bold;
  const errorColor        = colors.bgRed.white.bold;
  let colorNotFound       = false;
  end = start === true || error === true ? false : end;
  //check shorthand
  startColor = startColor ? startColor : start ? start : false;
  endColor   = endColor   ? endColor   : end   ? end   : false;

  /**
   * Helper to apply a String to colors
   * @param  {str} colorStr -> query string
   * @return {---}          -> colors ref || undefined
   */
  const getColor = function (colorStr) {
    return typeof colorStr === 'string' ? reduce(colorStr.split('.'), function (col, val) {
      //if user messes up save them
      if (colorNotFound || col === undefined) {
        return startColorDefault;
      }
      col = col[val];
      colorNotFound = col === undefined;
      return col;
    }, colors) : undefined;
  };
  //=== //if color
  color = color      ? (getColor(color) || startColorDefault)
        //if error
        : error      ? errorColor
        //if end color
        : endColor   ? endColorDefault
        //if statrt color
        : startColor ? startColor
        //default
        : startColorDefault;

  //reverse create border'n shit
  const strLen = str.length + 6;
  let modLen   = strLen;
  do {
    ++modLen;
  }while (modLen % 2 !== 0 || modLen % 3 !== 0);
  let capStr = '';
  for (let i = 0; i <= (modLen + 2); i++) {
    if (i % 2 === 0) {
      capStr += '+';
    }else {
      capStr += '-';
    }
  }
  const buf  = Math.floor((modLen - str.length) / 2);
  let bufStr = '';
  for (let i = 0; i < buf; i++) {
    bufStr += ' ';
  }

  //create string for logger
  const sCap = (val) => stringCaps ? val : '';
  const msg =  sCap('|>') + (str.length % 2 ? bufStr : bufStr.substring(1)) + str + bufStr + sCap('<|');
  const res = '\n' + capStr + '\n' + msg + '\n' + capStr;

  //short, return
  if (strReturn) {
    return res;
  }
  //show the world what you got!
  console[error ? 'error' : consoleType](color(res));
  return res;
};

module.exports = colur;
