/**
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

/*
Brute force:
1. slice number from start or end, pass the rest of the array along with k-- and totalSum
2. runtime 2^k

DP:
take left_sum: [0, i, i + i + 1, etc...]
and right_sum: [k + i..., k-1 + i..., etc...]
and find max of left[i] + right[k-i]
*/
var maxScore = function(cardPoints, k) {
    let leftSums = [0]
    let rightSums = [0]
    // adding left sums
    for (let i = 0; i < k; i++) {
        let currentSum = leftSums[i] + cardPoints[i]
        leftSums.push(currentSum)
    }
    // adding right sums
    for (let i = cardPoints.length - 1; i >= cardPoints.length - k; i--) {
        let currentSum = rightSums[rightSums.length - 1] + cardPoints[i]
        rightSums.push(currentSum)
    }
    //finding the largest sum of left and right sums combined
    let maxPoints = 0
    for (let i = 0; i < leftSums.length; i++) {
        let currentSum = leftSums[i] + rightSums[k - i]
        if (currentSum > maxPoints) maxPoints = currentSum
    }
    console.log(leftSums, rightSums)
    return maxPoints
};