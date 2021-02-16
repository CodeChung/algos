/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return null
    let { l1, l2 } = splitList(head) 
    let reversedL2 = reverseList(l2)
    let reorderList = mergeList(l1, reversedL2)
};

function splitList(head) {
    let length = 0
    let ptr = head
    while (ptr) {
        length++
        ptr = ptr.next
    }
    let middle = Math.floor(length / 2) - 1
    let ptr2 = head
    while (middle > 0) {
        ptr2 = ptr2.next
        middle--
    }
    let l2 = ptr2.next
    ptr2.next = null
    return { l1: head, l2 }
}

function reverseList(head) {
    if (!head) return head
    let prev = null
    let curr = head
    let next = curr.next
    while (next) {
        curr.next = prev
        prev = curr
        curr = next
        next = next.next
    }
    curr.next = prev
    return curr
}

function mergeList(l1, l2) {
    let dummy = new ListNode(0)
    let head = dummy
    while (l1 && l2) {
        head.next = l1
        l1 = l1.next
        head = head.next
        head.next = l2
        l2 = l2.next
        head = head.next
    }
    head.next = l1 || l2
    return dummy.next 
}