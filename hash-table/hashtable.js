class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedEntry = currentBucket[i];
          currentBucket.splice(i, 1);
          return deletedEntry;
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const allKeys = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        for (let j = 0; j < currentBucket.length; j++) {
          const currentEntry = currentBucket[j];
          allKeys.push(currentEntry[0]);
        }
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Alejandra", 2000);
myHashTable.set("Cat", 2010);

// myHashTable.get("Diego");
// myHashTable.get("Mariana");
// myHashTable.get("Alejandra");

// myHashTable.delete("Diego");
// myHashTable.delete("Mariana");
// myHashTable.delete("Alejandra");

// myHashTable.getAllKeys();
