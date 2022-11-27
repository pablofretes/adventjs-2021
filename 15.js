function checkSledJump(heights) {
  let left = 0;
  let right = heights.length - 1;

  let lastLeft = -Infinity;
  let lastRight = -Infinity;

  while (left <= right) {
    if (heights[left] > lastLeft && heights[right] > lastRight) {
      lastLeft = heights[left];
      lastRight = heights[right];
    } else {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]))