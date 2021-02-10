/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// recursive solution very easy
var postorderTraversal = function (root) {
    let traversalArray = []
    if (!root) return traversalArray
    recursiveTraversal(root, traversalArray)
    return traversalArray
};

function recursiveTraversal(root, traversalArray) {
    if (root) {
        recursiveTraversal(root.left, traversalArray)
        recursiveTraversal(root.right, traversalArray)
        traversalArray.push(root.val)

    }
}

// iterative solution, bit trickier

function postOrder(root) {
    let traversal = []
    if (!root) return traversal
    let stack = []
    let currentNode = root
    while (stack.length || currentNode) {
        if (currentNode) {
            stack.push(currentNode)
            currentNode = currentNode.left
        } else {
            currentNode = stack.pop()
            if (currentNode.right) {
                // is this a copout, creating a new node with current value and no children
                // and pushing it back into the stack??
                const childlessNode = new TreeNode(currentNode.val)
                stack.push(childlessNode)
            } else {
               traversal.push(currentNode.val)
            }
            currentNode = currentNode.right
        }
    }
    return traversal;
}
