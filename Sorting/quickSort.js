function quickSort(arr) {
    if (arr.length <= 1) return arr // base case just return array
    //set first element as pivot
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(quickSort([0,10,3,2,5,7,-1]))