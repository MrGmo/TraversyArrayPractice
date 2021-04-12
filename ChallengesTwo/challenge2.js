// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
//If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
//ex. longestWord('hello there, my name is Brad') === ['hello', 'there']

// Solution 1
// function longestWord(sen){
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
//   const sortArr = wordArr.sort((a, b) => b.length - a.length)
//   const longest = sortArr.filter(a => a.length === sortArr[0].length)
//   if(longest.length === 1){
//     return longest[0]
//   }else{
//     return longest
//   }
// }
//
// console.log(longestWord('Hello there, my name is Max'))

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// Solution 1
// function chunkArray(arr, len){
//   const chunkedArr = []
//   let i = 0
//
//   while(i < arr.length){
//     chunkedArr.push(arr.slice(i, i+len))
//     i += len
//   }
//   return chunkedArr
// }

// Solution 2
// function chunkArray(arr, len){
//   const chunkedArr = []
//
//   arr.forEach(function(x){
//     const last = chunkedArr[chunkedArr.length - 1]
//     if(!last || last.length === len){
//       chunkedArr.push([x])
//     }else{
//       last.push(x)
//     }
//   })
//   return chunkedArr
// }
//
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// Solution 1
// function flattenArray(arrays){
//   return arrays.flat()
// }

// Solution 2
// function flattenArray(arrays){
//   return arrays.reduce((a, b) => a.concat(b))
// }

// Solution 3
// function flattenArray(arrays){
//   return [].concat.apply([], arrays)
// }

// Solution 4
// function flattenArray(arrays){
//   return [].concat(...arrays)
// }
//
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// Solution 1
// function isAnagram(str1, str2){
//   let arr1 = str1.toLowerCase().split('').sort().join('')
//   let arr2 = str2.toLowerCase().split('').sort().join('')
//   return arr1 === arr2
// }
//
// console.log(isAnagram('dda','DAD'))

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'


// function letterChanges(str){
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
//     if(char === 'z' || char === 'Z'){
//       return 'a'
//     }else{
//       return String.fromCharCode(char.charCodeAt() + 1)
//     }
//   })
//   newStr = newStr.replace(/a|e|i|o|u/gi, vowel => {
//     return vowel.toUpperCase()
//   })
//   return newStr
// }
//
// console.log(letterChanges('hello there'))
