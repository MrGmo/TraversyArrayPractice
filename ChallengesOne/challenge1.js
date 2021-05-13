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

// CHALLENGE 3: REVERSE AN INTEGER
//Return an integer in reverse
//ex: reverseInt(521) === 125

// Solution 1
// const reverseInt = (num) => Number(num.toString().split('').reverse().join(''))

// console.log(reverseInt(521))

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution 1
// const capitalizeFirst = (str) => str.split(' ').map(x => x[0].toUpperCase() + x.substr(1)).join(' ')

// Solution 2
// function capitalizeFirst(str){
//   let arr = str.split(' ')
//   let newArr = []
//   for(let x of arr){
//     newArr.push(x[0].toUpperCase() + x.substr(1))
//   }
//   return newArr.join(' ')
// }

// Solution 3
// function capitalizeFirst(str){
//   return str.replace(/\b[a-z]/gi, function(x){
//     return x.toUpperCase()
//   })
// }

// console.log(capitalizeFirst('i love javascript'))


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// Solution 1
// function maxChar(str){
//   let obj = {}
//   str.split('').forEach(x => obj[x] > 0 ? obj[x]++ : obj[x] = 1)
//   return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b)
// }

// console.log(maxChar('javascript'))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// Solution 1
// function fizzBuzz(){
//   for(let i = 1; i <= 100; i++){
//     if(i % 15 === 0){
//       console.log('FizzBuzz')
//     }else if(i % 5 === 0){
//       console.log('Buzz')
//     }else if(i % 3 === 0){
//       console.log('Fizz')
//     }else{
//       console.log(i)
//     }
//   }
// }

// fizzBuzz();

// let i = 1

// while(i < 101){
//   if(i % 15 === 0){
//     console.log('FizzBuzz')
//   }else if(i % 5 === 0){
//     console.log('Buzz')
//   }else if(i % 3 === 0){
//     console.log('Fizz')
//   }else{
//     console.log(i)
//   }
//   i++
// }