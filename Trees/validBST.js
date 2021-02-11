/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * 
 * Pseudosolution:
 * Traverse left and right nodes, while keeping track of lower and upper bounds
 * -root.left => boundaries (currentLeftBoundary, root.val)
 * -root.right => boundaries (root.val, currentRightBoundary)
 * -initialize boundaries and -inf, inf
 * 
 * I understand the time complexity, not sure about the time complexity
 */

var isValidBST = function(root) {
    return validateBST(root, -Infinity, Infinity)
};

function validateBST(root, leftBoundary, rightBoundary) {
    if (!root) return true
    console.log(root.val, leftBoundary, rightBoundary)
    if (root.val <= leftBoundary || root.val >= rightBoundary) return false
    return validateBST(root.left, leftBoundary, root.val) && validateBST(root.right, root.val, rightBoundary)
}