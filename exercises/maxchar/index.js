// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  let maxCount = 0,
    maxChar = ''
  for (let c of str) {
    chars[c] = ++chars[c] || 1

    if (chars[c] > maxCount) {
      maxCount = chars[c]
      maxChar = c
    }
  }
  return maxChar
}

maxChar('abcccccccd')

module.exports = maxChar
