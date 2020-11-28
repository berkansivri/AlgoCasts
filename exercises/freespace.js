// is there any duplicate parameter

function areDuplicates(...args) {
  const items = args.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  return Object.values(items).some((x) => x > 1);
}

console.log(areDuplicates(3, 9, 1)); // false
console.log(areDuplicates(4, 3, 8, 4)); // true
console.log(areDuplicates("n", "6", "3", "Z")); // false

// find the maximum total on consecutive number as much as second parameter in the first array parameter

function maxSubarraySum(arr, k) {
  if (k > arr.length) return null;
  let max = arr.slice(0, k).reduce((a, c) => a + c);
  let temp = max;

  for (let i = k; i < arr.length; i++) {
    temp = temp - arr[i - k] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

function maxSubarraySum2(arr, k) {
  if (k > arr.length) return null;
  let max = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    max = Math.max(
      max,
      arr.slice(i, i + k).reduce((a, c) => a + c)
    );
  }
  return max;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

// search the second parameter on first parameter array

//binary search (O(logn))
function search(arr, n) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = ~~((start + end) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5], 3)); //2
console.log(search([1, 2, 3, 4, 5], 5)); //4
console.log(search([1, 2, 3, 4, 5], 8)); //-1
