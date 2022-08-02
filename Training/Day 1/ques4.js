let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let maxArray = [];

for (let i = 0; i < arr.length-3; i++) {
    let max = -1;
    for (let j = 0; j < 3; j++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        console.log("max",max);
    }
    maxArray.push(max)
};

console.log("maxArraymaxArraymaxArray", maxArray);