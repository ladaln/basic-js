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
  let newStr = ''
  const keys = new Set( Object.keys(options) )
  const times = keys.has('repeatTimes') ? options.repeatTimes : 1
  const separator = keys.has('separator') ? options.separator : '+'
  const addition = keys.has('addition') ? options.addition : ''
  const aTimes = keys.has('additionRepeatTimes') ? options.additionRepeatTimes : 1
  const aSeparator = keys.has('additionSeparator') ? options.additionSeparator : '|'

  for(i = 0; i < times; i++) {
    newStr += str
    for (let j = 0; j < aTimes; j++){
      newStr += j < aTimes - 1 ? addition + aSeparator : addition
    }
    newStr += i < times - 1 ? separator : ''
  }
  return newStr
}

module.exports = {
  repeater
};
