// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Solution 0 / using recursion
// function reverseString(str){
//   if(str === "") return "";
//   return reverseString(str.substring(1)) + str.charAt(0)
// }

// Solution 1
// const reverseString = (str) => str.split('').reverse().join('')

// console.log(reverseString('HELLO'))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// Solution 1

// console.log(isPalindrome('racecar'))

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// Solution 1

// console.log(reverseInt(123))


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution 0
// const capitalizeFirst = str => str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
//
// console.log(capitalizeFirst('i love javascript'))


// Solution 1


// Solution 2
// function capitalizeLetters(str) {
//   return str.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join(' ')
// }

// Solution 3

// console.log(capitalizeLetters('i love javascript'))


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// Solution 1

//
// console.log(maxCharacter('hhhhhhhhhhiiiii'))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".


// Solution 1



// Solution 2
