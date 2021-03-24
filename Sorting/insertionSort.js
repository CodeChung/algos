/**
 * Bit more confusing to implement with the indexes and all. still O(n2) though so I guess I'll stick with selectionSort if i need n2 algo
 * @param {*} nums 
 * @returns 
 */

function insertionSort(nums) {
    let length = nums.length
    for (let i = 1; i < length; i++) {
        let key = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j+1] = key
    }
    return nums
}
console.log(insertionSort([2,0,5,3,1]))