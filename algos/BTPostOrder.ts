import { BinaryNode } from "../utils/types";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  // Base Case:
  if (!curr) return path;

  // Recursive Case:
  // Pre
  walk(curr?.left, path);
  // In
  walk(curr?.right, path);
  path.push(curr.val);

  return path;
}

export default function post_order_traversal(
  head: BinaryNode<number>
): number[] {
  return walk(head, []);
}
