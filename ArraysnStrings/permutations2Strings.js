/**
 * Given two strings, s and b, find all permutations of s within b
 * 
 * ex. 'abbcd' => 'ababcdbaefdbbacbddfae'
 * ['babcd', 'abcdb', 'bcdba', 'dbbac', 'bacbd']
 * 
 * 1. get charCounts of string s
 * 2. Have a sliding window that compares charCount in window to charCount of s
 * 3. if current char of sliding window is not in s, 
 *     then jump sliding window to next substring that does have valid char
 * 4. return array of strings
 * i = 0,1, 2, 3
 * {
 *  a: 1, 0, -1
 *  b: 2, 1, 0
 *  c: 1, 0
 *  d: 1, 0
 * }
 */

function permutationsOfStringInString(s, b) {
    let charCount = getCharCount(s) // getting count of chars
    let permutations = findPermutationsInString(charCount, b, s) // finding permutations in string
}

function findPermutationsInString(charCount, stringToCheck, s) {
    let count = s.length
    let currentCount = {...charCount}
    let windowStart = 0 // iterate till we find char that is in charCount
    while (!charCount[stringToCheck[windowStart]]) windowStart++
    let rightPtr = windowStart
    let leftPtr = windowStart - count
    while (rightPtr < stringToCheck.length) {
        if (!(stringToCheck[rightPtr] in charCount)) {
            // reset charCount and move rightPtr
            currentCount = {...charCount}
            while (rightPtr < )
        } 

    }
}

function getCharCount(str) {
    let charCount = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        charCount[char] = (charCount[char] || 0) + 1
    }
    return charCount
}

