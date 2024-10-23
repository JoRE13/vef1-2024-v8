import {isString} from './helpers.js';
import { reverse } from './reverse.js';
export function palindrome(str) {
    if (isString(str)) {
      if (str.toLowerCase() === reverse(str).toLowerCase() && str != ''){
        return true
      }
      return false
    } 
    return false 
  }
  console.assert(palindrome('A!a') === true, 'palindrome: skilar hvort strengur sé samhverfur') 
  console.assert(palindrome(false) === false, 'palindrome: ekki leyfilegur strengur')
  console.assert(palindrome('') === false, 'palindrome: tómur strengur')
  