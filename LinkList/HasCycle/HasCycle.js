/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || head.next == null){
        return false
    }
    let fast = head.next
    let slow = head
    while(slow != fast){
        if(fast == null || fast.next == null){
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
