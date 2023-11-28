// A path finding algorithm to recursively navigate through a maze
// that is described as an array of strings

type Point = {
  x: number;
  y: number;
};

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base Case: need to know where we're currently at
  // 1. Off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  )
    return false;

  // 2. On a wall
  if (maze[curr.y][curr.x] === wall) return false;

  // 3. At the end/exit
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // 4. Somewhere we've been before
  if (seen[curr.y][curr.x]) return false;

  // ======================================================
  // Recursive Case: need to be able to walk in directions
  // 1. Pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // 2. Recurse
  for (let i = 0; i < dir.length; ++i) {
    // Check all 4 directions for next move
    const [x, y] = dir[i];

    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path))
      // If walk is successful then move on
      return true;
  }

  // 3. Post
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
