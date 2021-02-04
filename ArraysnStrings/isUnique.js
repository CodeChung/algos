/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * 
 * Edge cases/Examples:
 * ~Empty string -> true
 * ~'aaaaaaa' -> false
 * ~'a' -> true
 * -'abc' -> true
 */

function isUnique(string) {
    let lettersSeen = {}
    // add each letter to hash map; return false if already exists
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (lettersSeen[char]) return false
        lettersSeen[char] = 1
    }
    return true
}

// Without datastructures

function isUniqueWithoutDataStructure(string) {
    string = string.split('').sort((a,b) => (a < b) ? -1 : 1)
    console.log('string', string)
    for (let i = 1; i < string.length; i++) {
        if (string[i-1] === string[i]) return false
    }
    return true
}

console.log(isUnique('abfdafdsa'))
console.log(isUniqueWithoutDataStructure('abfdafdsa'))