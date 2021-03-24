/**
 * Runtime O(n^2)
 * Space complexity O(1)
 * @param {*} nums 
 * @returns 
 */

function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i // set current minimum index to i
        for (let j = i + 1; j < nums.length; j++) { //check the rest of the array
            if (nums[j] < nums[minIndex]) minIndex = j //if current j val is lower than current minIndex then replace minIndex 
        }
        // check if min index is different from i
        if (i !== minIndex) {
            swap(nums, i, minIndex)
        }
    }
    return nums
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(selectionSort([2,0,5,3,1]))