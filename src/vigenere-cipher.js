const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  reverse = true

  constructor(rev = true) {
    this.reverse = rev
  }

  encrypt(message, key) {
    if(!message 
      || typeof message != 'string' 
      || message.length == 0 
      || !key || typeof key != 'string'
      || key.length == 0
    ){
      throw new Error('Incorrect arguments!')
    }
    key = key.toUpperCase()
    let ni = 0
    let res = message.toUpperCase().split('').map((char, i) => {
      console.log(`message[${i}]=${char} key[${ni % key.length}]=${key[i % key.length]}`)
      if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) return char
      ni++
      let symbNumber = char.charCodeAt(0) - 65 // A - 1, Z - 26
      let keyNumber = key[(ni -1) % key.length].charCodeAt(0) - 65 // A - 0, Z - 25
      let newChar = (symbNumber + keyNumber) % 26
      return String.fromCharCode( newChar + 65 )
    }).join('')
    return this.reverse ? res : res.split('').reverse().join('')
  }
  decrypt(message, key) {
    if(!message 
      || typeof message != 'string' 
      || message.length == 0 
      || !key || typeof key != 'string'
      || key.length == 0
    ){
      throw new Error('Incorrect arguments!')
    }
    key = key.toUpperCase()
    let ni = 0
    let res =  message.toUpperCase().split('').map((char, i) => {
      if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) return char
      ni++
      let symbNumber = char.charCodeAt(0) - 65 // A - 1, Z - 26
      let keyNumber = key[(ni -1) % key.length].charCodeAt(0) - 65 // A - 0, Z - 25
      let newChar = (symbNumber - keyNumber) 
      newChar = newChar < 0 ? newChar + 26 : newChar
      newChar = newChar % 26
      return String.fromCharCode( newChar + 65 )
    }).join('')
    return this.reverse ? res : res.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
