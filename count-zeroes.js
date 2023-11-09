function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    let middleValue = arr[middleIdx];

    if (middleValue === 0) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return arr.length - leftIdx;
}

module.exports = countZeroes
