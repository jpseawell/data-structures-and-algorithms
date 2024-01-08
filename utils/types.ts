export type BinaryNode<T> = {
  val: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

export type GraphEdge = { to: number; weight: number };
export type WeightedAdjacencyList = GraphEdge[][];
