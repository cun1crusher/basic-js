const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || arguments.length == 0 || sampleActivity > 15 || sampleActivity <= 0 || isNaN(sampleActivity)) {
    return false;
  }

  let k, t, numerator;
  k = 0.693 / HALF_LIFE_PERIOD;
  numerator = Math.log(MODERN_ACTIVITY / sampleActivity);
  t = Math.ceil(numerator / k);
  return t;
};
