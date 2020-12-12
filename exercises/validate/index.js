// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require("./node");

function validate(
  node,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) {
  if (!node) return true;
  if (node.data >= max || node.data <= min) return false;
  return (
    validate(node.left, min, node.data) && validate(node.right, node.data, max)
  );
}

module.exports = validate;

// const n = new Node(1);
// n.left = new Node(1);
// console.log(validate(n));

// const n = new Node(10);
// n.insert(5);
// n.insert(15);
// n.insert(0);
// n.insert(20);
// n.left.left.right = new Node(999);
// console.log(validate(n));

// const n = new Node(10);
// n.insert(5);
// n.insert(15);
// n.insert(0);
// n.insert(20);
// console.log(validate(n));
