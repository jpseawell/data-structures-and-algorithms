/**
 * For this assignment, you will be coding the add() and remove() methods of a binary search tree.
 */

class TreeNode {
  left;
  right;
  data;

  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const traversalTypes = {
  preorder: "preorder",
  inorder: "inorder",
  postorder: "postorder",
  levelorder: "levelorder",
};

class BinarySearchTree {
  root;
  size;

  constructor(root = null) {
    this.root = root;
    this.size = 0;
  }

  add(data) {
    this.root = this.rAdd(this.root, data);
  }

  rAdd(curr, data) {
    if (!curr) {
      this.size++;
      return new TreeNode(data);
    } else if (data < curr.data) {
      curr.left = this.rAdd(curr.left, data);
    } else if (data > curr.data) {
      curr.right = this.rAdd(curr.right, data);
    }

    return curr;
  }

  remove(data) {
    const dummy = new TreeNode(null);
    this.root = this.rRemove(this.root, data, dummy);
    return dummy.data;
  }

  rRemove(curr, data, dummy) {
    // The dummy node is used to pass the removed data back
    // through the recursive stack
    if (data === null) {
      throw new Error("Data not found");
    } else if (data < curr.data) {
      curr.left = this.rRemove(curr.left, data, dummy);
    } else if (data > curr.data) {
      curr.right = this.rRemove(curr.right, data, dummy);
    } else {
      // data found
      dummy.data = curr.data;
      this.size--;

      if (!curr.left && !curr.right) {
        return null;
      } else if (!curr.right) {
        return curr.left;
      } else if (!curr.left) {
        return curr.right;
      } else {
        // Two children
        const temp = new TreeNode(null);
        curr.right = this.successor(curr.right, temp);
        curr.data = temp.data;
      }
    }

    return curr;
  }

  predecessor(curr, dummy) {
    if (!curr.right) {
      dummy.data = curr.data;
      return curr.left;
    } else {
      curr.right = this.predecessor(curr.right, dummy);
    }

    return curr;
  }

  successor(curr, dummy) {
    if (!curr.left) {
      dummy.data = curr.data;
      return curr.right;
    } else {
      curr.left = this.successor(curr.left, dummy);
    }

    return curr;
  }

  pre(node) {
    if (!node) return;

    console.log(node.data);
    this.pre(node.left);
    this.pre(node.right);
  }

  in(node) {
    if (!node) return;

    this.in(node.left);
    console.log(node.data);
    this.in(node.right);
  }

  post(node) {
    if (!node) return;

    this.post(node.left);
    this.post(node.right);
    console.log(node.data);
  }

  print(type = traversalTypes.preorder) {
    switch (type) {
      case traversalTypes.preorder:
        this.pre(this.root);
        break;
      case traversalTypes.inorder:
        this.in(this.root);
        break;
      case traversalTypes.postorder:
        this.post(this.root);
        break;
      default:
        throw Error("Invalid traversal type.");
    }
  }
}

const bst = new BinarySearchTree();
bst.add(50);
bst.add(15);
bst.add(75);
bst.add(5);
bst.add(25);
bst.add(20);
bst.add(100);

const removed = bst.remove(15);
console.log({ removed });
bst.print();
