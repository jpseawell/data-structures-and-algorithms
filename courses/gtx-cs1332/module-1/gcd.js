function gcd(x, y) {
  if (y === 0) return x;

  const remainder = x % y;
  return gcd(y, remainder);
}

const X = 1482,
  Y = 819;

const result = gcd(X, Y);
console.log(`The GCD of ${X} and ${Y} is ${result}.`);
