import { WeightedAdjacencyList } from "../utils/types";

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

// Returns index of lowest unvisited item - use a MinHeap here instead to run in O(log V * (V + E)) time
function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) continue;

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }

  return idx;
}

export default function dijkstra_list(
  source: number,
  sink: number,
  graph: WeightedAdjacencyList
): number[] {
  const seen = new Array(graph.length).fill(false); // nodes we've already seen
  const prev = new Array(graph.length).fill(-1); // where we came from to get to this node
  const dists = new Array(graph.length).fill(Infinity); // shortest distance taken to arrive at this node
  dists[source] = 0;

  // O(V^2 + E)
  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists); // get index of lowest unseen node
    seen[curr] = true;

    const adjs = graph[curr]; // get this node's edges
    for (let i = 0; i < adjs.length; i++) {
      // for each of it's edges...
      const edge = adjs[i];
      if (seen[edge.to]) continue;

      // find distance to next lowest edge
      const dist = dists[curr] + edge.weight;
      if (dist < dists[edge.to]) {
        // We found a shorter edge.. so record it
        dists[edge.to] = dist;
        prev[edge.to] = curr;
      }
    }
  }

  // Reverse the prev array to get path taken through the graph
  const out: number[] = [];
  let curr = sink;
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out); // path taken
}
