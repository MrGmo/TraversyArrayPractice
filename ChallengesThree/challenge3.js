// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution 1
// function addAll(...numbers){
//   return numbers.reduce((a, b) => a + b, 0)
// }
//
// console.log(addAll(2, 5, 6, 7))


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num){
//   let total = 0
//
//   function primeCheck(i){
//     for(let j = 2; j < i; j++){
//       if(i % j === 0){
//         return false
//       }
//     }
//         return true
//   }
//
//   for(let i = 2; i <= num; i++){
//     if(primeCheck(i)){
//       total+=i
//     }
//   }
//   return total
// }
//
// console.log(sumAllPrimes(100))

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1
// function seekAndDestroy(arr){
//   const args = Array.from(arguments)
//   function filterArr(arr){
//     return args.indexOf(arr) === -1
//   }
//   return arr.filter(filterArr)
// }

// Solution 2
// function seekAndDestroy(arr, ...rest){
//   return arr.filter(x => !rest.includes(x))
// }
//
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))


// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight(val){
//   const tree = []
//   const height = []
//
//   val.forEach((x, i) => {
//     if(x === -1){
//       tree.push(i)
//     }else{
//       height.push(x)
//     }
//   })
//   const sort = height.sort((a, b) => a - b)
//   tree.forEach((x, i) => sort.splice(tree[i], 0, -1))
//   return sort
// }
//
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters(str){
//   let compare = str.charCodeAt(0)
//   let missing;
//
//   str.split('').map((x, i) => {
//     if(str.charCodeAt(i) == compare){
//       ++compare
//     }else{
//       missing = String.fromCharCode(compare)
//     }
//   })
//   return missing
// }
//
// console.log(missingLetters('abcdefghjklmno'))

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
//
// function evenOddSums(arr){
//   let odd = 0
//   let even = 0
//   arr.forEach(x => x % 2 === 0 ? (even+=x) : (odd+=x))
//   return [even, odd]
// }
//
// console.log(evenOddSums([50, 60, 60, 45, 71]))
