import {isString} from './helpers.js';

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
    if (isString(str)) {
      let n_consonants = 0;
      for (const l of str.toLowerCase().split('')) {
        if(CONSONANTS.includes(l)){
          n_consonants ++;
        }
      }
      return n_consonants
    } 
    return 0
  }
  console.assert(consonants('Halló hæ') === 4, 'consonants: fjöldi samhljóða') 
  console.assert(consonants(false) === 0, 'consonants: ekki leyfilegur strengur')