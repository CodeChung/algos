/**
 * linked list of integers, modify linked list so even number comes before odd
 * 
 * 2 -> 2 -> 5 -> 7 -> 1 -> 3
 * 2 -> 2 -> 5 -> 7 -> 1 -> 3
 * Input: 17->15->8->12->10->5->4->1->7->6->NULL
 * Output: 8->12->10->4->6->17->15->5->1->7->NULL  
 * 17 -> 15 
 * 8 -> 12
 * 1. two dummy lists (odd and even)
 * 2. iterate through linked list and add current to appropriate list
 * 3. attach odd to even list and return
 */

function ListNode(val, next) {
    this.val = (val === undefined ? null : val)
    this.next = (next === undefined ? null : next)
}

function sortLinkedListByOddAndEven(head) {
    let evenList = new ListNode(0)
    let oddList = new ListNode(0)
    let currentEvenNode = evenList
    let currentOddNode = oddList
    while (head) {
        if (head.val % 2 === 0) {
            //add to evenList
            currentEvenNode.next = head
            currentEvenNode = currentEvenNode.next
        } else {
            // add to oddList
            currentOddNode.next = head
            currentOddNode = currentOddNode.next
        }
        head = head.next
    }
    currentOddNode.next = null
    currentEvenNode.next = oddList.next
    console.log('even', evenList)
    return evenList.next
}

function printLinkedList(list) {
    while (list) {
        console.log('Val: ', list.val)
        list = list.next
    }
}

// 16->3->4
//evenList = 0 -> 16 ->4
//oddList = 0 -> 3


// 17->15->8->12->10->5->4->1->7->6->NULL
// 17->15->8->12->10->5->4->1->7->6->17
let list = new ListNode(17, new ListNode(15, new ListNode(8, new ListNode(12, new ListNode(10, new ListNode(5, new ListNode(4, new ListNode(1, new ListNode(7, new ListNode(6))))))))))
// let list = new ListNode(16, new ListNode(3, new ListNode(4)))
let sortedList = sortLinkedListByOddAndEven(list)
printLinkedList(sortedList)

//sorting, dp,  graphs, object oriented design (ex. tic-tac-toe), heap,