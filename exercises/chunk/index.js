// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []
  while (chunked.length < Math.ceil(array.length / size)) {
    chunked.push(array.slice(chunked.length * size, chunked.length * size + size))
  }
  return chunked
}

// function chunk(array, size) {
//   const res = []
//   let arr = []

//   for (let n of array) {
//     arr.push(n)
//     if (arr.length === size) {
//       res.push(arr)
//       arr = []
//     }
//   }
//   if (arr.length) res.push(arr)
//   return res
// }

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)

module.exports = chunk
