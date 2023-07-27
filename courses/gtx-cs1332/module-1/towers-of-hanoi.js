/**
 * The goal of the game is to move the rings into the same configuration,
 * except on peg C by moving the rings one by one according to the following rules:
 *
 * - You can only move one ring each time you make a move.
 * - Smaller radius rings can never be below larger radius rings.
 * - When you move a ring, you can only take the ring at the top of the peg and drop it to the top of another peg.
 */

function move(n, { from, to, aux }) {
  if (n === 0) return;

  // Step 1. to <--> aux (switch places)
  move(n - 1, { from: from, to: aux, aux: to });

  console.log(`Move disk ${n} from ${from} to ${to}`);

  // Step 2. from <--> aux (switch places)
  move(n - 1, { from: aux, to: to, aux: from });
}

const N = 3;
move(N, { from: "A", to: "C", aux: "B" });

/**
 *
 * Time Complexity: O(2^n) because we have 2 recursive calls for each n
 * Space Complexity: O(n) because we have n auxiliary space
 *
 * References:
 * - https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/
 * - https://www.youtube.com/watch?v=rf6uf3jNjbo
 *
 * Notes:
 * - Ignore the largest ring and focus on moving the smaller rings to the middle
 *
 */
