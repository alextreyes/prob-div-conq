function findFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midVal = arr[mid];

    if (midVal === target) {
      return midVal;
    } else if (midVal < target) {
      floor = midVal;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return floor;
}

module.exports = findFloor;
