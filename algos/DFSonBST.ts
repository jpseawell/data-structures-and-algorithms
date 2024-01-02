import { BinaryNode } from "../utils/types";

function search(
  curr: BinaryNode<number> | null | undefined,
  needle: number
): boolean {
  // Base case:
  if (!curr) return false;
  if (curr.val === needle) return true;

  // Recursive case:
  if (curr.val < needle) return search(curr?.right, needle);
  return search(curr?.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
