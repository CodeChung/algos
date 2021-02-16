/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
/*
1. create empty return array size of list
Create a stack, add each value along with position
keep track of most recent value, if current value is greater
-keep popping and keep writing to return array
-then add current value
*/

var nextLargerNodes = function (head) {
    let nextGreaterNodeArr = []
    let stack = []
    let currentNode = head
    let index = 0
    while (currentNode) {
        while (stack.length && stack[stack.length - 1][0] < currentNode.val) {
            //if last node in stack is < current val, then pop and insert into return array
            let previousNode = stack.pop()
            //change node val for write
            previousNode[0] = currentNode.val
            addValToArray(previousNode, nextGreaterNodeArr)
        }
        stack.push([currentNode.val, index])
        index++
        currentNode = currentNode.next
    }
    while (stack.length) {
        //         get all the nodes in the stack without greater nodes and set their values to zero
        let previousNode = stack.pop()
        //change node val for write
        previousNode[0] = 0
        addValToArray(previousNode, nextGreaterNodeArr)
    }
    return nextGreaterNodeArr
};

function addValToArray(node, nextGreaterNodeArr) {
    let position = node[1]
    let value = node[0]
    //resize array if position is greater than arr length
    while (nextGreaterNodeArr.length < position + 1) {
        nextGreaterNodeArr.push(null)
    }
    nextGreaterNodeArr[position] = value
}
