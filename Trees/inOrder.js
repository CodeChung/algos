/**
 * Given the root of a binary tree, return the inorder traversal of its nodes values
 * Output: array
 * 
 * 
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function inorderTraversal(root) {
    let traversal = []
    if (!root) return traversal
    let stack = []
    let currentNode = root
    while (currentNode || stack.length) {
        if (currentNode) {
            stack.push(currentNode)
            currentNode = currentNode.left
        } else {
            currentNode = stack.pop()
            traversal.push(currentNode.val)
            currentNode = currentNode.right
        }
    }
    return traversal
}