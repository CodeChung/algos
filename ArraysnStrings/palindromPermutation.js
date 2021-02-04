/**
 * "Tact coa" => True
 * "Coc" => True
 * "ddoo" => true
 * "dod   "
 * "dea" => false
 * "" => true
 * 
 * 1. hashmap to generate count of chars
 * 2. check that <= 1 value in hash map is odd
 */

function checkPalindromePermutation(str) {
    let charCount = {}
    str = str.toLowerCase()
    // get character counts
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        charCount[char] = (charCount[char] || 0) + 1
    }
    // check how many odd values in charCounts
    let oddCounts = 0
    Object.keys(charCount).forEach(char => {
        if (charCount[char] % 2 !== 0) oddCounts++
    })
    console.log(charCount)
    return oddCounts < 2
}

console.log(checkPalindromePermutation('Tact  coa'))
console.log(checkPalindromePermutation('Tactbbbcoa'))
console.log(checkPalindromePermutation('Tactbbbca'))
console.log(checkPalindromePermutation(''))