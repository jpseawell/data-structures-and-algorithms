// Breadth First Search on a Graph in Adjacency Matrix form
type WeightedAdjacencyMatrix = number[][];

export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) break;

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0 || seen[i]) continue; // No Edge or Already Seen

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  } while (q.length);

  // Build our path by going backwards
  let curr = needle;
  const out: number[] = []; // Should end up like prev but in reverse

  while (prev[curr] !== -1) {
    out.push(curr); // Add it to our path
    curr = prev[curr]; // Move cursor to current node's parent
  }

  if (out.length) return [source, ...out].reverse();
  return [];
}
