/**
 * Suppose that you are tiling a 2 x n (2 rows, n columns) grid/board with the following pieces that you cannot rotate.
 *
 * Find a recursive formula to compute the number of tilings of the 2 x n board using any number of the pieces above so that
 * no two black square pieces are stacked on top of each other.
 * How would you implement this in code in O(n) time and O(1) space?
 */

/**
 * Notes:
 * - tile L shaped with a 1x1
 * - for odd column numbers fill in w 2 1x1s
 *
 * base case:
 * - all of the columns are filled
 *
 * recursive case:
 * - fill in the next 1 or 2 columns
 */

const Tiles = {
  WHITE_L: "WHITE_L",
  RED_L: "RED_L",
  BLACK_1x1: "BLACK_1x1",
  BLUE_1x1: "BLUE_1x1",
};

function patternedRectangularTilings(n, tiles = []) {
  // If no columns left to fill, return 0
  if (n === 0) return tiles;

  // If even number of columns left, fill two columns with an L and a 1x1
  if (n % 2 === 0)
    return patternedRectangularTilings(n - 2, [
      ...tiles,
      Tiles.WHITE_L,
      Tiles.BLUE_1x1,
    ]);

  // Else fill 1 column with 2 1x1s stacked on top of each other
  return patternedRectangularTilings(n - 1, [
    ...tiles,
    Tiles.BLUE_1x1,
    Tiles.BLACK_1x1,
  ]);
}

const tilesUsed = patternedRectangularTilings(5);
console.log(tilesUsed);
