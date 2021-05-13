// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Solution 1
// const reverseString = (str) => str.split('').reduce((a, b) => b + a, '')

// Solution 2
// const reverseString = (str) => str.split('').reverse().join('')

// Solution 3
// function reverseString(str){
//   let revWord = ''
//   for(let i = str.length-1; i >= 0; i--){
//     revWord+=str[i]
//   }
//   return revWord
// }

// Solution 4
// function reverseString(str){
//   let revWord = ''
//   for(let i = 0; i <= str.length-1; i++){
//     revWord = str[i] + revWord
//   }
//   return revWord
// }

// Solution 5
// function reverseString(str){
//   if(str === ''){
//     return ''
//   }else{
//     return reverseString(str.substr(1)) + str.charAt(0)
//   }
// }

// Solution 6
// function reverseString(str){
//   revString = ''
//   for(let x of str){
//     revString = x + revString
//   }
//   return revString
// }

// Solution 7
// function reverseString(str){
//   revString = '';
//   str.split('').forEach(x => revString = x + revString);
//   return revString
// }

// console.log(reverseString('hello'))


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// Solution 1
// const isPalindrome = (str) => str.split('').reverse().join('') === str



// console.log(isPalindrome('racecar'))

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
