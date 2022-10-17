const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let iArr = arr.map((it, i) => it != -1 ? i : it).filter(it => it != -1)
  let sArr = arr.filter(it => it != -1).sort((a, b) => a - b)
  let rArr = JSON.parse( JSON.stringify(arr) )
  let j = 0
  for(i of iArr) {
    rArr[i] = sArr[j]
    j++
  }
  return rArr
}

module.exports = {
  sortByHeight
};
