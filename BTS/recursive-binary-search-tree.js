class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (value === currentNode.value) return true;
    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else return this.rContains(value, currentNode.right);
  }

  #rInsert(value, currentNode = this.root) {
    if (!currentNode) return new Node(value);

    if (value < currentNode.value)
      currentNode.left = this.#rInsert(value, currentNode.left);
    else if (value > currentNode.value)
      currentNode.right = this.#rInsert(value, currentNode.right);

    return currentNode;
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value);
    this.#rInsert(value);
  }

  minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value < currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      // here value equal currentNode.value means we find the target node to delete

      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }
  }

  deleteNode(value) {
    this.#deleteNode(value, this.root);
  }
}

let myBST = new BST();

myBST.rInsert(47);
myBST.rInsert(21);
myBST.rInsert(76);
myBST.rInsert(18);
myBST.rInsert(27);
myBST.rInsert(52);
myBST.rInsert(82);

console.log("minimum value form root:");
console.log(myBST.minValue(myBST.root));

console.log("minimum value form root.Right:");
console.log(myBST.minValue(myBST.root.right));
console.log(myBST);

// myBST.rInsert(2);
// myBST.rInsert(1);
// myBST.rInsert(3);

// console.log("\nRoot: ", myBST.root.value);
// console.log("\nRoot->Left: ", myBST.root.left.value);
// console.log("\nRoot->Right: ", myBST.root.right.value);

/*
      EXPECTED OUTPUT:
      ----------------
      BST Contains 27:
      true
      
      BST Contains 17:
      false
  
  */
