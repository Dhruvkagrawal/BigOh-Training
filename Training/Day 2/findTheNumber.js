let i = 1;
let ans;

while (i) {
    if (i % 2 === 0 && i % 3 === 0 && i % 4 === 0 && i % 5 === 0 && i % 6 === 0 && i % 7 === 0 && i % 8 === 0 && i % 9 === 0) {
        ans = i;
        break
    } else {
        i++;
        continue;
    }
};

console.log("ans", ans);