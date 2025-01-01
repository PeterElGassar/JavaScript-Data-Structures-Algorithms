class heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    let parent = this.#parent(current);
    while (current > 0 && this.#heap[current] > this.#heap[parent]) {
      this.#swap(current, parent);
      current = parent;
    }
  }

  sinkDown(index) {
    let maxIndex = index;

    let size = this.#heap.length;

    while (true) {
      let leftChild = this.#leftChild(index);
      let rightChild = this.#leftChild(index);

      if (leftChild < size && this.#heap[leftIndex] > this.#heap[maxIndex])
        maxIndex = leftIndex;

      if (rightChild < size && this.#heap[rightIndex] > this.#heap[maxIndex])
        maxIndex = leftIndex;

      if (maxIndex !== index) {
        this.#swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  remove() {
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop();

    const maxValue = this.heap[0];

    this.#heap[0] = this.heap.pop();
    this.sinkDown(0);

    return maxValue;
  }
}

const myHeap = new heap();

myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);
