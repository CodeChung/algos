function merge(arr1, arr2) {
    let sorted = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        // push the lower number to sorted array
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i])
            i++
        } else {
            sorted.push(arr2[j])
            j++
        }
    }
    // if arr1 remainder add to sorted
    while (i < arr1.length) {
        sorted.push(arr1[i])
        i++
    }
    // do the same for arr 2
    while (j < arr2.length) {
        sorted.push(arr2[j])
        j++
    }
    return sorted
}

function mergeSort(arr) {
    // recursiion base case: if length <= 1 we can just return
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(merge([2, 5, 10, 57], [9, 12, 13]))
console.log(merge([1], [0]))