// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let str = ''
    if (i % 3 === 0) str += 'fizz'
    if (i % 5 === 0) str += 'buzz'
    console.log(str || i)
  }
}

module.exports = fizzBuzz
