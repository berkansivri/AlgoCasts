// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// function pyramid(n) {
//   for (let i = 0; i < n; i++) {
//     let str = ''
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - 1 - i && j <= n - 1 + i) str += '#'
//       else str += ' '
//     }
//     console.log(str)
//   }
// }

function pyramid(n, row = 0, str = '') {
  if (row === n) return

  if (str.length === n * 2 - 1) {
    console.log(str)
    return pyramid(n, row + 1)
  }

  let add = ''
  if (str.length >= n - 1 - row && str.length <= n - 1 + row) {
    add = '#'
  } else {
    add = ' '
  }

  return pyramid(n, row, str + add)
}

pyramid(3)

module.exports = pyramid
