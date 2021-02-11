/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    let root = new TreeNode(preorder[0]) //set first value of preorder array as root
    let inorderIndex = inorder.indexOf(preorder[0]) //find index of root inside inorder array
    
    //build left subtree
    let leftTreePreorder = preorder.slice(1, 1 + inorderIndex) // slice preorder array to build left subtree
    let leftTreeInorder = inorder.slice(0, inorderIndex) // slice inorder array to build left subtree
    root.left = buildTree(leftTreePreorder, leftTreeInorder)
    
    //build right subtree
    let rightTreePreorder = preorder.slice(1 + inorderIndex,) // slice preorder array to build right subtree
    let rightTreeInorder = inorder.slice(inorderIndex + 1,)
    root.right = buildTree(rightTreePreorder, rightTreeInorder)
    return root
};