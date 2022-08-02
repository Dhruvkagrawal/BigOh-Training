// let arr = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60]
// ];

// let target = 10;

// Method # 1

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         newArr.push(arr[i][j]);
//     }
// }
// let start = 0;
// let end = newArr.length - 1;
// let ans = false;

// while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (newArr[mid] === target) {
//         ans = true;
//         break;
//     } else if (newArr[mid] > target) {
//         end = mid - 1;
//     } else {
//         start = mid + 1;
//     }
// }
// console.log(ans);

// Method # 2

// let flag = false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === target) {
//             flag = true
//         }
//     }
// }

// console.log(flag);

// Method # 3

let arr = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];

let target = 10;
let club;
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= target && target <= arr[i][arr[i].length - 1]) {
        club = i;
        break;
    }
};

let matrix = arr[club];
let start = 0;
let end = matrix.length - 1;
let ans = false;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (matrix[mid] === target) {
        ans = true;
        break;
    } else if (matrix[mid] > target) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

console.log(ans);