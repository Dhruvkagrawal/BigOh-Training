let arr = [
  [1, 2, 3, 31],
  [4, 5, 6 ,61],
  [7, 8, 9 ,91],
  [72, 82, 92 ,02],
];

function clockWiseProblem() {
  let clockWise = [];
  let count = arr.length * arr[0].length;
  let current = 0;
  let j = 0;
  let k = 0;
  while (current < count) {
    for (let i = k; i < arr[0].length; i++) {
      clockWise.push(arr[j][i]);
      current++;
    }
    j++;
    for (let i = j; i < arr.length; i++) {
      clockWise.push(arr[i][arr[0].length - 1]);
      current++;
    }
    arr[0].length--;
    if (j < arr.length) {
      for (let i = arr[0].length - 1; i >= 0; i--) {
        clockWise.push(arr[arr.length - 1][i]);
        current++;
      }
      arr.length--;
    }
    if (k < arr[0].length) {
      for (let i = arr.length - 1; i >= j; i--) {
        clockWise.push(arr[i][k]);
        current++;
      }
      k++;
    }
  }
  return clockWise;
}

let antiClockwise = [];
let i = 0;
let j = 0;
let m = arr.length;
let n = arr[0].length;
for (j = n - 1; j >= 0; j--) {
  antiClockwise.push(arr[i][j]);
}
j = 0;
for (i = 1; i <= m - 1; i++) {
  antiClockwise.push(arr[i][j]);
}
i = i - 1;
for (j = 1; j <= n - 1; j++) {
  antiClockwise.push(arr[i][j]);
}
i = i - 1;
for (j = n - 1; j > 0; j--) {
  antiClockwise.push(arr[i][j]);
}

let clockWise = clockWiseProblem();

console.log("clockWise", clockWise);
console.log("antiClockwise", antiClockwise);