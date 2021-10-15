/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

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
    let left = head
    let right = head
    let i = 0
    
    if (!head.next) return null
    
    while (i++ < n) {
        right = right.next
    }
    
    if (right === null) {
        return head = head.next
    } 
    
    while (right && right.next) {
        right = right.next
        left = left.next
    }
    
    left.next = left.next.next
    
    return head        
};