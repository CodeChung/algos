
const WordDistance = function(words) {
    this.wordIndexes = {}
    //map out arrays of indexes for each word; stuff into hash map
    words.forEach((word, index) => {
        if (!this.wordIndexes[word]) this.wordIndexes[word] = []
        this.wordIndexes[word].push(index)
    })
}

WordDistance.prototype.shortest = function(word1, word2) {
    // [0,20,40]
    // [3,5,7,11,17, 19]
    // 2 ptrs, keep track of distance between
    // move up the ptrs based on the smaller next val
    // check for last index on both arrays
    let word1Indexes = this.wordIndexes[word1]
    let word2Indexes = this.wordIndexes[word2]
    let smallestDistance = Infinity
    let word1Index = 0
    let word2Index = 0
    while (word1Index < word1Indexes.length && word2Index < word2Indexes.length) {
        //break when both indexes are at the end
        if (Math.abs(word1Indexes[word1Index] - word2Indexes[word2Index]) < smallestDistance) {
            //check if smallest distance
            smallestDistance = Math.abs(word1Indexes[word1Index] - word2Indexes[word2Index])
        }
        if (word1Index === word1Indexes.length -1 && word2Index === word2Indexes.length - 1) {
            break
        }
        //check if either arrays are at the end in which case move the other pointer
        if (word1Index === word1Indexes.length -1) word2Index++
        else if (word2Index === word2Indexes.length - 1) word1Index++
        // compare the smaller of the next indexes and increment
        else if (word1Indexes[word1Index + 1] < word2Indexes[word2Index + 1]) word1Index++
        else word2Index++
    }
    return smallestDistance
}
