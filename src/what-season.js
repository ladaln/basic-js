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
let s = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']

function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(date.getDate != Date.prototype.getDate) throw new Error('Invalid date!')
  try {
    return s[date.getMonth()]
  } catch(e){
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
