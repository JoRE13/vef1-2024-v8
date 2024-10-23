import {isString} from './helpers.js';

export function reverse(str) {
    if (isString(str)){
      return str.split('').reverse().join('');
    }
      return null
  }
  console.assert(reverse('hæ') === 'æh', 'reverse: snýr streng við')
  console.assert(reverse(false)=== null, 'reverse: ekki leyfilegur strengu')