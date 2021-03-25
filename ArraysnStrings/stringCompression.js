/**
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. 
 * If compressed string is larger than original, return original
 * 
 * Questions
 * -Can we expect integers in this string or just letters
 * -
 * 
 * Ex. 
 * aaabbbbbcccccc -> a3b5c6
 * aaabbbaaabbb -> a3b3a3b3
 * abababa -> a1b1a1b1a1
 * 
 * 1. keep track of current letter and count of letter and increment
 * 2. when reaching different letter write current letter and count to string
 * 3. keep going till we reach end of string
 * 
 * while current letter:
 *      increment count
 * on new letter:
 *      write to string the current letter and count
 *      reset letter and count to 1
 * 
 * runtime O(n) space complexity O(1)
 */

function stringCompression(str) {
    let compressedString = buildCompressedString(str) // generates compressed string
    return str.length < compressedString.length ? str : compressedString
}

function buildCompressedString(stringToCompress) {
    let compressedString = ''
    if (!stringToCompress) return compressedString
    let count = 0
    let i = 0
    let currentChar = stringToCompress[i]
    while (i < stringToCompress.length) {
        console.log(i, stringToCompress)
        while (i < stringToCompress.length && stringToCompress[i] === currentChar) {
            count++
            i++
        }
        compressedString += currentChar + count
        if (i < stringToCompress.length) currentChar = stringToCompress[i]
        count = 1
    }
    return compressedString
}

console.log(stringCompression('aaabbc'))