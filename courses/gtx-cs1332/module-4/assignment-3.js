/**
 * Tree Traversals
 * For this assignment, you will implement 3 different ways of traversing a tree:
 * pre-order traversal, in-order traversal, and post-order traversal.
 * Since trees are naturally recursive structures,
 * each of these traversals should be implemented recursively.
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

  constructor(root) {
    this.root = root;
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

const getExampleTree = () => {
  // 3rd level
  const d110 = new TreeNode(110);
  // 2nd level
  const d10 = new TreeNode(10);
  const d75 = new TreeNode(75);
  const d125 = new TreeNode(125, d110);
  // 1st level
  const d25 = new TreeNode(25, d10);
  const d100 = new TreeNode(100, d75, d125);
  // root level
  const d50 = new TreeNode(50, d25, d100);

  return new BinarySearchTree(d50);
};

const bst = getExampleTree();
bst.print(traversalTypes.postorder);
