class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    // itirate over all key characters
    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      let x = key.charCodeAt(i) * 55;
      let y = x % this.dataMap.length;
      // charCodeAt return the deCoded value of the char.
      hash = (hash + key.charCodeAt(i) * 55) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    // if first time
    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    // we need to just only the value not the entire object
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

let myHash = new HashTable();
