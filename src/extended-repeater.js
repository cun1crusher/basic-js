const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let out = '';
  if (typeof options.separator !== 'string') {
    options.separator = "+";
  }

  if (typeof options.additionSeparator !== 'string') {
    options.additionSeparator = "|";
  }

  if (typeof options.repeatTimes === 'undefined') {
    options.repeatTimes = 1;
  }

  if (typeof options.additionRepeatTimes === 'undefined') {
    options.additionRepeatTimes = 1;
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    let rec = '';
    if (out.length > 0) {
      out += options.separator;
    }
    out += str;
    if (typeof options.addition !== 'undefined') {
      for (let k = 1; k <= options.additionRepeatTimes; k++) {
        if (rec.length > 0) {
          rec += options.additionSeparator;
        }
        rec += options.addition;
      }
      out += rec;
    }
  }
  return out;
};
