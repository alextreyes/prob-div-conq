function findRotatedIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midVal = arr[mid];

    if (midVal === target) {
      return mid;
    }
    if (arr[start] <= midVal) {
      if (arr[start] <= target && target < midVal) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (midVal <= arr[end]) {
      if (midVal < target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
module.exports = findRotatedIndex;

// rotation count
