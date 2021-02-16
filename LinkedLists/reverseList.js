/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    function reversedList(head) {
        let curr = head
        let prev = null
        while (curr) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }
        return prev
    }
    return reversedList(head)
};