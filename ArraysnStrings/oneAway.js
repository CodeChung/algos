/**
 * three types of edits can be performed on a string
 * -insert char
 * -remove char
 * -replace char
 * given 2 strings, write a function to check if they are <= 1 edit away
 * 
 * ex.
 * pale, ple -> true
 * ple, pale -> true
 * pel, pele -> true
 * pel, pal -> true
 * pale, fele -> false
 * 
 * 1. check length -> split subfunction based on equal letters vs off by one
 * 2. equal letters -> pointer for each string, return # differences < 2
 * 3. off by one (smallString, largeString) -> 
 *      2 pointers, on different letters increment largestring ptr by one
 *      the rest of string should be identical
 * 
 * Time complexity O(n)
 * Space complexity O(1)
 */

function oneAway(str1, str2) {
    // check that difference in length < 2
    if (Math.abs(str1.length - str2.length) > 1) return false
    // check identical length strings for valid case
    if (str1.length === str2.length) return sameLengthCheck(str1, str2)
    let smallString, largeString
    if (str1.length > str2.length) {
        largeString = str1
        smallString = str2
    } else {
        largeString = str2
        smallString = str1
    }
    // check small and large string for valid case
    return offByOneCheck(smallString, largeString)
}

function sameLengthCheck(str1, str2) {
    let differences = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) differences++
    }
    return differences < 2
}

function offByOneCheck(small, large) {
    let differences = 0
    let smallIndex = 0
    let largeIndex = 0
    while (largeIndex < large.length) {
        if (small[smallIndex] !== large[largeIndex]) {
            differences++
            largeIndex++
            if (differences > 1) return false
        }
        smallIndex++
        largeIndex++
    }
    return true
}

console.log(oneAway('peldsao', 'dela'))