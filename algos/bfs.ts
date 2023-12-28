import { BinaryNode } from "../utils/types";

export default function breadth_first_search(
  head: BinaryNode<number>,
  needle: number
): boolean {
  const q = [head];

  while (q.length) {
    const curr = q.shift();

    if (curr?.val === needle) return true;
    if (curr?.left) q.push(curr.left);
    if (curr?.right) q.push(curr.right);
  }

  return false;
}
