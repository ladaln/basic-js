const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  realDeep = 0;

  calculateDepth(arr, deep = -1) {
    if(deep == -1){ this.realDeep = 1; deep = 1 }
    if (deep > this.realDeep) this.realDeep = deep
    arr.forEach(element => {
      if(typeof element == 'object') this.calculateDepth(element, deep + 1)
    });
    return this.realDeep
  }
}

module.exports = {
  DepthCalculator
};
