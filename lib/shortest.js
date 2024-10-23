import {isString} from './helpers.js';
export function shortest(str) {
    if (isString(str)) {
      let shortest_word = '';
      let len_shortest = Number.MAX_SAFE_INTEGER;
      for (const word of str.split(' ')) {
        if (word.length < len_shortest ) {
          len_shortest = word.length;
          shortest_word = word;
        }
      }
      return shortest_word
    }
    return null
  }
  console.assert(shortest('Hello all my friends') === 'my', 'shortest: skilar stysta streng') // svo við þurfum ekki að testa allt
  console.assert(shortest(false) === null, 'shortest: ekki leyfilegur strengur')
  console.assert(shortest('') === '', 'shortest: tómur strengur')
  