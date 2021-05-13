// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
//If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
//ex. longestWord('hello there, my name is Brad') === ['hello', 'there']

// Solution 1
// function longestWord(str){
//   const arr = str.match(/[a-z0-9]+/gi)
//   const sorted = arr.sort((a, b) => b.length - a.length)
//   const longestWordArr = sorted.filter(word => word.length === sorted[0].length)
//   return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr
// }

// console.log(longestWord('Hello there, my name is Max'))

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// Solution 1
// function chunkArray(arr, size){
//   const chunkedArr = []
//   let i = 0

//   while(i < arr.length){
//     chunkedArr.push(arr.slice(i, i+size));
//     i+=size
//   }
//   return chunkedArr
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// Solution 1
// const flattenArray = (arr) => arr.flat(Infinity)

// Solution 2
// function flattenArray(arr){
//   let flat = [].concat(...arr)
//   return flat.some(Array.isArray ) ? flattenArray(flat) : flat
// }

// Solution 3
// const flattenArray = (arr) => arr.reduce((a, b) => a.concat(b))

// Solution 4
// const flattenArray = (arr) => [].concat.apply([],arr)

// Solution 5
// const flattenArray = (arr) => [].concat(...arr)

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// Solution 1
// function isAnagram(str1, str2){
//   const cleanStr1 =  str1.replace(/[\W]/g, '').toLowerCase().split('').sort().join('')
//   const cleanStr2 = str2.replace(/[\W]/g, '').toLowerCase().split('').sort().join('')
//   return cleanStr1 === cleanStr2
// }

// console.log(isAnagram('dda','DAD###'))

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str){
  let newStr = []
  let wordStr = []
  for(let x of str){
    newStr.push(x.charCodeAt())
  }
  for(let y of newStr){
    wordStr.push(String.fromCharCode(y+1))
  }
  let convert = wordStr.join('').replace('!', ' ')

  return convert.replace(/([a|e|i|o|u])/g, function(vowels){
    return vowels.toUpperCase()
  })
}


console.log(letterChanges('hello there'))
