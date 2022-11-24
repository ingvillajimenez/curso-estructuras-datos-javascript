// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (!item) {
      return this.length;
    }

    if (this.length === 0) {
      this.data[0] = item;
      this.length++;
      return this.length;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;
    this.length++;
    return this.length;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
}

const myArray = new MyArray();
// myArray.push("Diego");
// myArray.push("Karen");
// myArray.push("Oscar");

// myArray.pop();
// myArray.delete(1);

// myArray.unshift("!!!")
// myArray.unshift("Platzinauta")
// myArray.unshift("lograste")
// myArray.unshift("lo")

// myArray.unshift("Suerte")
// myArray.unshift("Con el")
// myArray.unshift("desafio")
// myArray.unshift("platzinauta")
// myArray.unshift("Un 🐱 random en el desafío")

// myArray.shift()
