/**
 * Write a method to replace all spaces in string with %20
 * Input: (str, strLength)
 * 
 * ex. "Mr John Smith    " => "Mr%20John%20Smith"
 * edge cases
 * -" Mr  " => "%20Mr"
 * -"Mr   " => "Mr%20"
 * -"   " => "%20"
 */

/**
 * 1. ptr at end of string
 * 2. ptr at 1st instance of char starting backwards
 * 3. while char on leftptr write at rightptr and move along
 * 4. on space write %20 
 */

function urlify(str, strLength) {
    if (!str) return str
    str = str.split('')
    let rightPtr = strLength - 1
    let leftPtr = strLength - 1
    // keep moving left ptr till we find the first character that isn't space
    while (str[leftPtr] === ' ') {
        leftPtr--
    }
    console.log('left', leftPtr)
    while (leftPtr >= 0) {
        console.log(leftPtr, rightPtr)
        // if leftPtr hits space, fill the 3 rightPtr indexes with special string and decrement
        if (str[leftPtr] === ' ') {
            console.log('right', rightPtr)
            str[rightPtr] = '0'
            rightPtr--
            str[rightPtr] = '2'
            rightPtr--
            str[rightPtr] = '%'
            rightPtr--
            console.log(str)
        } else {
            str[rightPtr] = str[leftPtr]
            rightPtr--
        }
        leftPtr--
    }
    return str.join('')
}

console.log(urlify("Mr John Smith    ", 17))
console.log(urlify(" Mr  ", 5))