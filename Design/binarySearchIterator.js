/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
/*
1. create a stack
2. while loop -> add current node to stack and move left

hasNext
1. check stack for length

next
1. pop stack
2. check for right
3. move to right node
4.  while loop -> add current node to stack and move left
*/

const BSTIterator = function(root) {
    this.stack = []
    while (root) {
        this.stack.push(root)
        root = root.left
    }
}

BSTIterator.prototype.hasNext = function() {
    return !!this.stack.length
}

BSTIterator.prototype.next = function() {
    let nextNode = this.stack.pop() //popping most recent addition to stack
    if (nextNode.right) {
        //check if right node exists
        let currentNode = nextNode.right
        //keep looping left
        while (currentNode) {
            this.stack.push(currentNode)
            currentNode = currentNode.left
        }
    }
    return nextNode.val
}