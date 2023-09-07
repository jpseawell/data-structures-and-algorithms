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
    this.root = this.rRemove(this.root, data);
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
      // TODO: Data found case
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
bst.add(80);
bst.add(30);
bst.print();
