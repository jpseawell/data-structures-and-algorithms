import { BinaryNode } from "../utils/types";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  // Base Case:
  if (!curr) return path;

  // Recursive Case:
  // Pre
  walk(curr?.left, path);
  path.push(curr.val);
  walk(curr?.right, path);
  // post

  return path;
}

export default function in_order_traversal(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
