/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * 
 */

function TreeNode(val, left, right) {
    this.val = val ? val : null
    this.left = left ? left : null
    this.right = right ? right : null
}

function preOrder(root) {
    let traversalArray = []
    if (!root) return traversalArray
    recursiveTraversal(root, traversalArray)
    return traversalArray
}

function recursiveTraversal(root, traversalArray) {
    if (root) {
        traversalArray.push(root.val)
        recursiveTraversal(root.left, traversalArray)
        recursiveTraversal(root.right, traversalArray)
    }
}