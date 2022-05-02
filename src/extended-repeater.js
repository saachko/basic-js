const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) {
    str = 'null'
  }

  str = str.toString();
  let result = str;

  if (options.addition === false) {
    options.addition = 'false';
  }

  if (options.addition === null) {
    options.addition = 'null';
  }

  if (options.addition) {
    let add = options.addition.toString();

    if (options.additionRepeatTimes) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        if (options.additionSeparator) {
          add += options.additionSeparator;
        } else {
          add += '|'
        }
        
        add += options.addition.toString();
      }
    } 

    result += add;
  }

  if (options.repeatTimes) {
    let rep = '';
    for (let i = 1; i < options.repeatTimes; i++) {
      if (options.separator) {
        rep += options.separator;
      } else {
        rep += '+'
      }

      rep += result;
    }

    result += rep;
  }

  return result;
  
}

module.exports = {
  repeater
};
