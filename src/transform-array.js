const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr1) {
  if(!arr1 || typeof arr1 !== 'object') throw new Error("'arr' parameter must be an instance of the Array!")
  let arr = JSON.parse(JSON.stringify(arr1))
  try {
    i = 0;
    while (i < arr.length) {
      if(!arr[i]) arr = arr.filter((it, index) => index != i )
      if(arr[i] === '--double-next' && i < arr.length - 1 && isNumber(arr[i+1])) { 
        arr[i] = arr[i+1]
      }
      if(arr[i] === '--double-prev' && i > 0 && isNumber(arr[i-1])) { 
        arr[i] = arr[i-1]
      }
      if(arr[i] === '--discard-prev' && i != 0) { arr = arr.filter((it, index) => index != i - 1 ); i-- }
      if(arr[i] === '--discard-next' && i != arr.length + 1) { arr = arr.filter((it, index) => index != i + 1 ); }
      i++
    }
    return arr.filter(it => isNumber(it))
  } catch(e) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  return arr
}

const vals = new Set(['--discard-prev', '--discard-next', '--double-prev', '--double-next'])
const isNumber = (num) => vals.has(num) ? false : true

module.exports = {
  transform
};
