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
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let temp = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;

    return temp;
  }

  get(index) {
    // validate index in the range
    if (index < 0 || index > this) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    // insert into beginning
    if (index === 0) return this.unshift(value);
    // insert into end
    if (index === this.length) return this.push(value);
    // insert into middle
    const newNode = new Node(value);
    const temp = this.get(this.length - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;

    //remove from beginning
    if (index === 0) return this.shift();
    //remove from end
    if (index === this.length - 1) return this.pop();
    //remove from middel
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

  //
  //
  printList() {
    let temp = this.head;

    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    this.head ? console.log("Head", this.head) : console.log("Head", this.head);
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

function test() {
  let myLinkedList = new LinkedList("Peter");

  myLinkedList.push("Nagy");
  myLinkedList.push("Halim");
  myLinkedList.push("Ibrahim");

  console.log("LL before reverse():");
  myLinkedList.printList();
  myLinkedList.reverse();

  console.log("\nLL after reverse():");
  myLinkedList.printList();
}

test();
