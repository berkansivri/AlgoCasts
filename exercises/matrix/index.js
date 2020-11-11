// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = Array.from(Array(n), () => new Array(n));
  let counter = 1,
    startRow = 0,
    endRow = n - 1,
    startColumn = 0,
    endColumn = n - 1;
  while (counter <= Math.pow(n, 2)) {
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter++;
    }
    startColumn++;
  }
  return matrix;
}

console.log(matrix(3));
console.log(matrix(4));

module.exports = matrix;
