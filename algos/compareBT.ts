import { BinaryNode } from "../utils/types";

// Compare two binary trees for content and shape recursively
export default function compare(
  a: BinaryNode<number> | null | undefined,
  b: BinaryNode<number> | null | undefined
): boolean {
  // Base case:
  if (!a && !b) return true; // structurally the same
  if (!a || !b) return false; // structurally not the same
  if (a.val !== b.val) return false; // values not the same

  // Recursive case:
  return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
