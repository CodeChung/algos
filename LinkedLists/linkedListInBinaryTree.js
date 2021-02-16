/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
1. find the start of the path
2. verify that downward path from there is valid
3. explore entire tree because 1 false path could have a true path afterwards
*/
var isSubPath = function(head, root) {
    return checkPathStart(head, root) // finds the start of the path
};

function checkPathStart(head, root) {
    if (!head || !root) return false
    let validTree
    if (head.val == root.val) validTree = verifyRemainingTree(head, root) 
    return validTree || checkPathStart(head, root.left) || checkPathStart(head, root.right)
}

function verifyRemainingTree(head, root) {
    if (head && !root) return false
    if (!head) return true
    if (head.val !== root.val) return false
    return verifyRemainingTree(head.next, root.left) ||verifyRemainingTree(head.next, root.right)
}