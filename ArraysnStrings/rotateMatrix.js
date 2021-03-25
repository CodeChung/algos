/**
 * Given an image represented by an NxN matrix, 
 * where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 * 
 * ex.
 * 123
 * 456
 * 789
 * 
 * 741
 * 852
 * 963
 * 
 * 
 * 1234
 * 5678
 * 9112
 * 9843
 * 
 * Brute force method:
 * get length of N
 * for row to N (backwards)
 *  create newRow
 *  for col to N
 *      newRow.push(matrix[col][row])
 *  push newRow to newMatrix
 * 
 * Runtime: O(n^2); Space Complexity: O(n^2)
 * 
 * 
 *          
 */

/*
 * In place method:
Layer should be up to n / 2; odd ones will be single
for each layer:
   for i = 0 to layer.length - 1: //the last index in each layer will be the first for a different layer
       temp = top[i]
       top[i] = left[i]
       left[i] = bottom[i]
       bottom[i] = right[i]
       top[i] = temp

   

Run time for this is O(n^2) but space complexity O(1)
*/

function rotateMatrix(matrix) {
    console.log("MY matrix", matrix)
    let totalLayersToTraverse = matrix.length / 2 // ex. 3
    console.log("TOTAL layers", totalLayersToTraverse)
    for (let layer = 0; layer < totalLayersToTraverse; layer++) { // 0 < 3
        console.log("Layer", layer)
        let currentLayerLength = getLayerLength(layer, matrix) // ex. 4
        let start = layer // 0 
        let endBoundary = currentLayerLength + layer - 1
        console.log("Layer length", currentLayerLength)
        console.log("END BOundary", endBoundary)
        for (let i = start; i < layer + currentLayerLength - 1; i++) {
            console.log('boundaries',i, layer + currentLayerLength - 1)
            let temp = matrix[layer][i] //top            
            let left = matrix[endBoundary - i][layer]
            matrix[layer][i] = left
            let bottom = matrix[currentLayerLength - 1][endBoundary - i]
            matrix[endBoundary - i][layer] = bottom
            let right = matrix[i][currentLayerLength - 1]
            console.log('corners',temp, left, bottom, right)
            matrix[currentLayerLength - 1][endBoundary - i] = right
            matrix[i][currentLayerLength - 1] = temp
        }
    }
    return matrix
}

function getLayerLength(layerIndex, matrix) {
    return matrix.length - layerIndex * 2
}

let matrix = [[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]
/*
test cases
[[1,2],[3,4]]
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
[[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]

*/
console.log(rotateMatrix(matrix))

/*
12
34

31
42


123
456
789

741
852
963

*/