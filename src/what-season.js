const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    const err = 'Unable to determine the time of year!';
    return err;
  }

  if (!(date instanceof Date) || date.hasOwnProperty('getMonth') || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
    let season;

    if (month < 2) {
      season = 'winter';
    } else if (month < 5) {
      season = 'spring';
    } else if (month < 8) {
      season = 'summer';
    } else if (month < 11) {
      season = 'autumn';
    } else {
      season = 'winter';
    }

    return season;
}

module.exports = {
  getSeason
};
