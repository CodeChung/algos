/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let length = 0
    let ptr1 = dummy
    let ptr2 = dummy
    while (n) {
        ptr2 = ptr2.next
        n--
    }
    while (ptr2.next) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    }
    ptr1.next = ptr1.next.next
    return dummy.next
};