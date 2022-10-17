const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str=='') return ''
  let arr = [0, str[0]]
  let i = 0
  str.split('').forEach(it => {
    if(it == arr[i + 1]) {
      arr[i]++
    } else {
      i += 2
      arr = arr.concat(1, it)
    }
  })
  return arr.filter(it => it != 1).join('')
}

module.exports = {
  encodeLine
};
