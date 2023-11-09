function sortedFrequency(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  if (arr.indexOf(target) != -1) {
    let startThis = arr.indexOf(target);

    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
      let middleValue = arr[middleIdx];

      if (middleValue === target) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
    return leftIdx - startThis;
  }
  return -1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1);

module.exports = sortedFrequency;
