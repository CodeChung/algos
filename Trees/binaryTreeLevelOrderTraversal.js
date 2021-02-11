/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 
 * I think we can do a preorder traversal, while keeping track of depth 
 * if return traversal array < depth: push new array and insert value
 * else just insert value to appropriate depth array
 */

var levelOrder = function(root) {
    let traversalArray = []
    traverseTreeAndInsertNode(root, 0, traversalArray)
    return traversalArray
};

function traverseTreeAndInsertNode(root, depth, traversalArray) {
    if (!root) return
    if (traversalArray.length < depth + 1) { traversalArray.push([]) }
    traversalArray[depth].push(root.val)
    traverseTreeAndInsertNode(root.left, depth + 1, traversalArray)
    traverseTreeAndInsertNode(root.right, depth + 1, traversalArray)
}