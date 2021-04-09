const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.listNode = new ListNode();
    this.newNode = this.listNode;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    this.newNode.value = element;
    this.newNode.next = new ListNode();
    this.newNode = this.newNode.next;
  }

  dequeue() {
    const x = this.listNode.value;

    this.listNode.value = this.listNode.next.value;
    this.listNode.next = this.listNode.next.next;
    return x;
  }
}

module.exports = Queue;
