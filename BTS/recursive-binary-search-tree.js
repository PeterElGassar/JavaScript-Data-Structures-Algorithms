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
    else currentNode.right = this.#rInsert(value, currentNode.right);

    return currentNode;
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value);
    this.#rInsert(value);
  }
}

let myBST = new BST();

myBST.rInsert(2);
myBST.rInsert(1);
myBST.rInsert(3);

console.log("\nRoot: ", myBST.root.value);
console.log("\nRoot->Left: ", myBST.root.left.value);
console.log("\nRoot->Right: ", myBST.root.right.value);

/*
      EXPECTED OUTPUT:
      ----------------
      BST Contains 27:
      true
      
      BST Contains 17:
      false
  
  */
