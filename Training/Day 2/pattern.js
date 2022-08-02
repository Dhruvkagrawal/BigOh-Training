let left = 0;
let right = 6;
let str = ""

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        if (j === right) {
            str += "/"
        } else if (j === left) {
            str += "\\"
        } else {
            str += "*"
        }
    }
    str += "\n"
    left++;
    right--;
};

console.log(str);