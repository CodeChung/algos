/**
 * Given two strings, write a method to decide if one is a permutation of the other
 * 
 * 'apple' 'papel' => true
 * 'apple' '' => false
 * '' 'apple' => false
 * 'apple' 'bear' => false
 */

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false
    let charCount = getCharCount(str1)
    return verifyPermutation(charCount, str2)
}

function verifyPermutation(charCount, str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (!(char in charCount)) return false
        charCount[char] -= 1
        if (charCount[char] < 0) return false
    }
    let validPermutation = true
    // check if all values in charCount == 0
    Object.keys(charCount).forEach(char => {
        if (charCount[char] !== 0) validPermutation = false
    })
    return validPermutation
}

function getCharCount(str) {
    // iterate through str and return count of chars
    let charCount = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        charCount[char] = (charCount[char] || 0) + 1
    }
    console.log("CHARCOUNT", charCount)
    return charCount
}

console.log(checkPermutation('aple', 'pael'))