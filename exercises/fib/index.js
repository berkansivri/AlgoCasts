// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}

// recursive >
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib);

// iterative > O(n) space, O(n) time
function fib2(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.pop();
}

// iterative > O(1) space, O(n) time
function fib3(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = b;
    b += a;
    a = c;
  }
  return b;
}

fib(4);

module.exports = fib;
