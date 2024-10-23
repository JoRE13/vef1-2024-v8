import {isString} from './helpers.js';
export function longest(str) {
    if (isString(str)) {
      let longest_word = '';
      let len_longest = 0;
      for (const word of str.split(' ')) {
        if (word.length > len_longest ) {
          len_longest = word.length;
          longest_word = word;
        }
      }
      return longest_word
    }
    return null
  }
  console.assert(longest('Hello World') === 'Hello', 'longest: skilar lengsta streng') // svo við þurfum ekki að testa allt
  console.assert(longest(false) === null, 'longest: ekki leyfilegur strengur')
  console.assert(longest('') === '', 'longest: tómur strengur')