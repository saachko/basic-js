const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns;
  let sec;

  turns = 2**disksNumber - 1;

  const SEC_IN_HOUR = 3600;

  sec = turns / (turnsSpeed / SEC_IN_HOUR);
  sec = Math.floor(sec);

  let result = { turns: turns, seconds: sec }

  return result;
}

module.exports = {
  calculateHanoi
};
