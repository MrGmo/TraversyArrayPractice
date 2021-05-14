// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution 1
// const addAll = (...nums) => nums.reduce((a, b) => a + b, 0)

// Solution 2
// function addAll(){
//   let arr = Array.from(arguments)
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//     sum+=arr[i]
//   }
//   return sum
// }

// console.log(addAll(2, 5, 6, 7))


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// Solution 1
// function sumAllPrimes(num){
//   let i = 2
//   let total = 0
//   while(i <= num){
//     if(num % i === 0){
//       total+=i
//     }
//     i++
//   }
//   return total
// }

// Solution 2
// function sumAllPrimes(num){
//   let total = 0
//   for(let i = 2; i <= num; i++){
//     if(num % i === 0){
//       total+=i
//     }
//   }
//   return total
// }

// console.log(sumAllPrimes(10))

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1
const seekAndDestroy = (arr, val1, val2) => arr.filter(x => x !== val1 && x !== val2)

// Solution 2




console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined


// console.log(missingLetters('abcdefghjklmno'))

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]



// console.log(evenOddSums([50, 60, 60, 45, 71]))
