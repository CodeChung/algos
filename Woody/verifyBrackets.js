/**
 * String with combinations of [], {}, () along with #s and special characters
 * Evaluate whether string is properly closed
 * 
 * '(dog)' => true
 * '(dog' => false
 * '(fds(s{fds}g)' => false
 * '(fds(s{fds}g))' => true
 * '[(][){{}}]' => false
 * '' => true
 * '][' => false
 * 
 * unfinishedBrackets = [
 * (,
 * ]
 * 
 * 1. Iterate through string
 * 2. If char is right bracket
 *      - check that stack has matching left bracket
 * 3. If char is left bracket
 *      - add left bracket to list
 * 
 */

function verifyBrackets(string) {
    let unfinishedBrackets = []
    let leftBrackets = {
        '{': 1,
        '[': 1,
        '(': 1
    }
    let rightBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (leftBrackets[char]) unfinishedBrackets.push(char)
        else if (rightBrackets[char]) {
            if (!unfinishedBrackets.length) return false
            let mostRecentUnfinishedBracket = unfinishedBrackets.pop()
            if (mostRecentUnfinishedBracket !== rightBrackets[char]) return false
        }
    }
    return unfinishedBrackets.length === 0
}

console.log(verifyBrackets(''))