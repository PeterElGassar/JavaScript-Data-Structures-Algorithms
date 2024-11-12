class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;

    if (this.length === 1) {
      return this.makeEmpty();
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) temp = temp.next;
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) temp = temp.prev;
    }
    return temp;
  }

  set(index, value) {
    let node = this.get(index);
    return node ? !!(node.value = value) : false;
  }
  insert(index, value) {
    if (index > this.length || index < 0) return false;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    const newNode = new Node(value);

    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    else if (index === this.length - 1) return this.pop();
    else if (index === 0) return this.shift();

    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }
}

// test code

let dLL = new DoublyLinkedList(1);
dLL.push(3);

console.log("DLL before insert():");
dLL.printList();

dLL.insert(1, 2);

console.log("\nDLL after insert(2) in middle:");
dLL.printList();

dLL.insert(0, 0);

console.log("\nDLL after insert(0) at beginning:");
dLL.printList();

dLL.insert(4, 4);

console.log("\nDLL after insert(4) at end:");
dLL.printList();
