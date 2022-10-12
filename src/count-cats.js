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
function countCats(counCats) {
  let number
  throw new NotImplementedError('Not implemented');
 let newArray = countCats.filter (function (cat)=>{
if (cat==="^^"){
 return cat}
else{
return 0}
}
)
if(newArray[0]===0){
return 0}
 else return let number= newArray.length()
}

module.exports = {
  countCats
};
