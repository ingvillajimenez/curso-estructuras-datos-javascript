//    10
//  4    20
// 2 8 17 170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return "El nodo no se encuentra en el arbol";
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            return "El nodo no se encuentra en el arbol";
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            return "El nodo no se encuentra en el arbol";
          }
          currentNode = currentNode.right;
        } else {
          return currentNode;
        }
      }
    }
  }

  // search(value, currentNode = this.root) {
  //   if (currentNode === null) {
  //     return "El nodo no se encuentra en el arbol";
  //   } else if (value < currentNode.value) {
  //     return this.search(value, currentNode.left);
  //   } else if (value > currentNode.value) {
  //     return this.search(value, currentNode.right);
  //   } else {
  //     return currentNode;
  //   }
  // }
}

const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(4);
// tree.insert(20);
// tree.insert(2);
// tree.insert(8);
// tree.insert(17);
// tree.insert(170);

// tree.search(20);
