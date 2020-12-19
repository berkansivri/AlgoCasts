function merge(left, right) {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return [...merged, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const res = mergeSort([97, 0, 22, -30]);
console.log(res);

module.exports = { mergeSort, merge };
