const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let activity = parseFloat(sampleActivity);

  if (!activity || typeof(sampleActivity) !== 'string' || activity > 15 || activity < 0) {
    return false;
  }
  // 0.693 is an approximation of the natural logarithm of two
  let k = 0.693 / HALF_LIFE_PERIOD;
  // N0 / N
  let x = MODERN_ACTIVITY / activity;

  let age = Math.log(x) / k;

  return Math.ceil(age);
}

module.exports = {
  dateSample
};
