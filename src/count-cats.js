const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  if([...arguments].length == 0) return 0;
  let count = 0;
  [...arguments].forEach(it => {
    if(typeof it == 'object') {
      if(it!=null && it.length != 0)
        it.forEach(el => {
          count += countCats(el);
        })
    } else {
      count += it == '^^' ? 1 : 0
    }
  })
  return count
}

module.exports = {
  countCats
};
