class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  getLength() {
    console.log("Length: ", this.length);
  }
  // WRITE THE FINDMIDDLENODE METHOD HERE //
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      // debugger;
      slow = slow.next;
      fast = fast.next.next;
      if (fast.value > 8) debugger;
      console.log("=========");
      console.log("Slow: ", slow);
      console.log("Fast: ", fast);
    }
    return slow;
  }

  hasLoop() {
    // Initialize two pointers, slow and fast
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      debugger;
      if (slow === fast) return true;
    }
    return false;
  }
  // /
  findMiddleNode2() {
    //odd
    let indexOfMiddle = Math.floor(this.length / 2) + 1;
    let middleNode = this.head;
    for (let i = 1; i < indexOfMiddle; i++) {
      middleNode = this.head.next;
      this.head.next = middleNode.next;
    }
    return middleNode;
  }

  // WRITE THE FINDKTFROMEND METHOD HERE //
  findKthFromEnd(k) {
    if (!this.head || !k) return null;
    debugger;
    let firstPointer = this.head;
    let secondPointer = this.head;
    for (let i = 1; i < k; i++) {
      if (firstPointer.next !== null) firstPointer = firstPointer.next;
      else return null;
    }
    while (firstPointer !== null && firstPointer.next !== null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
    return secondPointer;
  }
  /////////////////////////////////////////
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

console.log("Original list:");
myLinkedList.printList();

const k = -1;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}
