let arr = [1, 2, 3, 6, 5, 4];
let target = 11;
let ans = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let inner = []
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === target) {
                inner.push(arr[i], arr[j], arr[k])
            }
        }
        if (inner.length !== 0) {
            inner.sort((a, b) => {
                return a - b;
            })
            ans.push(inner);
        }
    }
};

console.log(ans);