/*
array of sorted integers
return array of integers squared still sorted
[-3, -1, 0, 2, 3] => [0, 1, 4, 9, 9]
[-5, -3,5, 7]
[0, 1, 4, 9, 9]
[]
-1st element neg, last element neg -> return reversed array
-1st element pos -> array^2
-1st element neg, last element positive

looking the pivot (wher current element neg, next element >= 0)
*/

// function squareArray(nums) {
//     if (!nums.length) return nums
//     if (nums.length === 1) return nums.map(num => num * num)
//     if (nums[0] >= 0) return nums.map(num => num * num)
//     if (nums[0] < 0 && nums[nums.length - 1] <= 0) return nums.reverse().map(num => num * num)

//     let pivot = findPivot()
//     function findPivot() {
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i-1] < 0 && nums[i] >= 0) {
//                 return i
//             }
//         }
//     }

//     let squaredArr = []
//     let leftPtr = pivot - 1
//     let rightPtr = pivot
//     function addToArray(leftPtr, rightPtr) {
//         // [-3, -1, 0,2, 3]
//         while (leftPtr >= 0 && rightPtr < nums.length) {
//             console.log(leftPtr, rightPtr)
//             let leftNum = nums[leftPtr]
//             let rightNum = nums[rightPtr]
//             console.log('squared',leftNum * leftNum, rightNum * rightNum)
//             if (leftNum * leftNum < rightNum * rightNum) {
//                 squaredArr.push(leftNum * leftNum)
//                 leftPtr--
//             } else {
//                 squaredArr.push(rightNum * rightNum)
//                 rightPtr++
//             }
//         }
//         console.log('final', leftPtr, rightPtr)
//         if (rightPtr < nums.length) {
//             console.log('moving right ptr')
//             while (rightPtr < nums.length) {
//                 let rightNum = nums[rightPtr]
//                 squaredArr.push(rightNum * rightNum)
//                 rightPtr++
//             }
//         }
//         if (leftPtr >= 0) {
//             console.log('moving left ptr')
//             while (leftPtr >= 0) {
//                 let leftNum = nums[leftPtr]
//                 squaredArr.push(leftNum * leftNum)
//                 leftPtr--
//             }
//         }
//     }
//     addToArray(leftPtr, rightPtr)
//     return squaredArr
// }

// function squareArray2(nums) {
//     if (!nums.length) return nums
//     if (nums.length === 1) return nums.map(num => num * num)
//     if (nums[0] >= 0) return nums.map(num => num * num)
//     if (nums[0] < 0 && nums[nums.length - 1] <= 0) return nums.reverse().map(num => num * num)

//     let pivot = findPivot()
//     function findPivot() {
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i-1] < 0 && nums[i] >= 0) {
//                 return i
//             }
//         }
//     }

//     let squaredArr = []
//     let leftPtr = pivot - 1
//     let rightPtr = pivot
//     function addToArray(leftPtr, rightPtr) {
//         // [-3, -1, 0,2, 3]
//         while (leftPtr >= 0 && rightPtr < nums.length) {
//             console.log(leftPtr, rightPtr)
//             let leftNum = nums[leftPtr]
//             let rightNum = nums[rightPtr]
//             console.log('squared',leftNum * leftNum, rightNum * rightNum)
//             if (leftNum * leftNum < rightNum * rightNum) {
//                 squaredArr.push(leftNum * leftNum)
//                 leftPtr--
//             } else {
//                 squaredArr.push(rightNum * rightNum)
//                 rightPtr++
//             }
//         }
//         console.log('final', leftPtr, rightPtr)
//         if (rightPtr < nums.length) {
//             console.log('moving right ptr')
//             while (rightPtr < nums.length) {
//                 let rightNum = nums[rightPtr]
//                 squaredArr.push(rightNum * rightNum)
//                 rightPtr++
//             }
//         }
//         if (leftPtr >= 0) {
//             console.log('moving left ptr')
//             while (leftPtr >= 0) {
//                 let leftNum = nums[leftPtr]
//                 squaredArr.push(leftNum * leftNum)
//                 leftPtr--
//             }
//         }
//     }
//     addToArray(leftPtr, rightPtr)
//     return squaredArr
// }

// let ans = squareArray([])
// console.log(ans)

/*
array of sorted integers
return array of integers squared still sorted

edge cases:
// neg + positive with zero
[-3, -1, 0, 2, 3] => [0, 1, 4, 9, 9]
// neg + positve no zero
[-3,-1, 1, 3] => [1, 1, 9, 9]
// empty arr
[] => []
// single element arrays
[2] => [4]
// all positives
[1,2,3,4]
// all negatives
[-4,-3,-2,-1]

pseudocode
-all negatives -> return reversed array mapped
-all positive -> return mapped aray with squares
-negative & positive numbers
    -find pivot (element >= 0)
        -binary search log(n)
    -split array, reverse negative array
    -ptrs on both arrays comparing which element squared is smaller
        -o(n)
looking the pivot (wher current element neg, next element >= 0)
*/

function squareSortedArray(nums) {
    console.log("NUMS", nums)
    if (!nums.length) return []
    if (nums[0] >= 0) return nums.map(num => num * num)
    if (nums[nums.length - 1] < 0) return nums.reverse().map(num => num * num)
    let pivot = findPivot(nums)
    console.log("Pivot", pivot)
    let negativeArray = nums.slice(0, pivot + 1)
    let positiveArray = nums.slice(pivot+1, )
    console.log(negativeArray, positiveArray)
    let sortedArray = sortArray(negativeArray, positiveArray)
    return sortedArray
}

function findPivot(nums) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < 0 && nums[mid + 1] >= 0) return mid
        else if (nums[mid] < 0) left = mid + 1
        else right = mid - 1
    }
    return -1
}

function sortArray(negativeArray, positiveArray) {
    let negativePtr = 0
    let positivePtr = 0
    let sortedArray = []
    negativeArray = negativeArray.reverse()
    while (negativePtr < negativeArray.length && positivePtr < positiveArray.length) {
        console.log(negativePtr, positivePtr)
        let negativeSquared = negativeArray[negativePtr] * negativeArray[negativePtr] 
        let positiveSquared = positiveArray[positivePtr] * positiveArray[positivePtr]
        if (negativeSquared < positiveSquared) {
            sortedArray.push(negativeSquared)
            negativePtr++
        } else {
            sortedArray.push(positiveSquared)
            positivePtr++
        }
    }
    if (negativePtr < negativeArray.length) {
        while (negativePtr < negativeArray.length) {
            let negativeSquared = negativeArray[negativePtr] * negativeArray[negativePtr]
            sortedArray.push(negativeSquared)
            negativePtr++
        }
    }
    if (positivePtr < positiveArray.length) {
        while (positivePtr < positiveArray.length) {
            let positiveSquared = positiveArray[positivePtr] * positiveArray[positivePtr]
            sortedArray.push(positiveSquared)
            positivePtr++
        }
    }
    return sortedArray
}

let ans = squareSortedArray([-3, -1, 0])
console.log("HELLO")
console.log('ans',ans)