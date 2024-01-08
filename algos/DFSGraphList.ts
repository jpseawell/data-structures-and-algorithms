import { WeightedAdjacencyList } from "../utils/types";

/**
 * Walks the weighted adjacency list recursively until the needle is found
 * @param graph - List of edges that we are walking
 * @param curr - the current node we're evaluating
 * @param needle - the node we're searching for
 * @param seen - a list of booleans for tracking if we've seen the current node before
 * @param path - the list of nodes we've visited on our way to current node
 * @returns
 */
function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]
): boolean {
  // Base Case
  if (seen[curr]) return false;

  // Recursive Case
  // pre
  seen[curr] = true;
  path.push(curr); // mark node as visited
  if (curr === needle) return true;

  // recurse
  const list = graph[curr]; // All of the edges, AKA this node's connections to other nodes
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge.to, needle, seen, path)) return true; // We found the needle
  }

  // post
  path.pop();

  return false;
}

/**
 * Depth First Search on a Weighted Adjacency List representation of a graph.
 *
 * Runs in O(V + E) time because we're visiting every single vertext and edge.
 * @param graph - the list of edges we're searching
 * @param source - the node from which we're starting our search
 * @param needle - the node we're searching for
 * @returns path - the path we took to find the node
 */
export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  return path;
}
