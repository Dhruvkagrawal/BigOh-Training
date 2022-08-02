let arr = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

let outer = [];
for (let i = 0; i < arr.length; i++) {
  let inner = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    inner.push(arr[j][i]);
    break;
  }
  outer.push(inner);
}

console.log("outer", outer);