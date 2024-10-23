import {isString} from './helpers.js';

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
    if (isString(str)) {
      let n_vowels = 0;
      for (const l of str.toLowerCase().split('')) {
        if(VOWELS.includes(l)){
          n_vowels ++;
        }
      }
      return n_vowels
    } 
    return 0
  }
  console.assert(vowels('Halló hæ') === 3, 'vowels: fjöldi sérhljóða') 
  console.assert(vowels(false) === 0, 'vowels: ekki leyfilegur strengur')
  