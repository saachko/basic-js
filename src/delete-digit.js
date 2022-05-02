const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let arr = n.split('');
  let arr2;
  let nums = []

  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr.slice();
    arr2.splice(i, 1);
    nums[i] = arr2.join('')
  }

  return Math.max.apply(null, nums);
}

module.exports = {
  deleteDigit
};
