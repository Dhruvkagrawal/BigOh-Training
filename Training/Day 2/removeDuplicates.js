let arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];

var uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i])
    }
};

console.log("uniqueArray", uniqueArray);
